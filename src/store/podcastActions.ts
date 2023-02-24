import axios from 'axios';
import parse from 'rss-to-json';

import { AppDispatch, RootState } from '.';
import { uiActions } from './uiSlice';
import { podcastActions } from './podcastSlice';
import { httpErrorHandler } from '../helpers/errors';
import {
  getExpireTime,
  oneDayTimeInMiliseconds,
  setExpireTime,
} from '../helpers/helpers';
import { simplifyRequestPodcastsEntry } from '../helpers/podcast';
import {
  PodcastDetail,
  PodcastEpisode,
  PodcastItemData,
  PodcastsData,
} from '../podcast.types';
import { PodcastDetailReq } from '../screens/PodcastDetail.types';

export const fetchPodcasts = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`
                ${process.env.REACT_APP_ITUNES_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`);

        const entries = simplifyRequestPodcastsEntry(data.feed.entry);
        const podcastsToSaveData: PodcastsData = {
          podcasts: entries,
          expiration: setExpireTime(oneDayTimeInMiliseconds),
        };
        localStorage.setItem(
          'podcastsData',
          JSON.stringify(podcastsToSaveData)
        );

        dispatch(podcastActions.addPodcasts(entries));
      } catch (error) {
        httpErrorHandler(error);
      } finally {
        dispatch(uiActions.loadingEnd());
      }
    };

    dispatch(uiActions.loadingStart());
    const preloadedPodcastsString = localStorage.getItem('podcastsData');

    if (preloadedPodcastsString) {
      const preloadedPodcasts: PodcastsData = JSON.parse(
        preloadedPodcastsString
      );
      const hasExpired = new Date().getTime() > preloadedPodcasts.expiration;
      if (!hasExpired) {
        dispatch(podcastActions.addPodcasts(preloadedPodcasts.podcasts));
        dispatch(uiActions.loadingEnd());
        return;
      }
    }

    fetchData();
  };
};

export const fetchPodcastDetail = (podcastId: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_CORS_ANYWHERE_URL}/${process.env.REACT_APP_ITUNES_URL}/lookup?id=${podcastId}`
        );

        const podcastDetailReq: PodcastDetailReq = JSON.parse(data.contents);

        if (podcastDetailReq.resultCount > 0) {
          const { feedUrl } = podcastDetailReq.results[0];

          const { podcast } = getState();
          const selectedPodcast = podcast.podcasts.find(
            (p) => p.id === podcastId
          );

          if (selectedPodcast) {
            debugger;
            const rssData = await parse(
              `${process.env.REACT_APP_CORS_ANYWHERE_URL}/${feedUrl}`
            );

            const newPodcastDetail: PodcastDetail = {
              ...selectedPodcast,
              title: rssData.title,
              description: rssData.description,
              items: rssData.items.map(
                (item: PodcastEpisode, index: number) => ({
                  ...item,
                  id: index,
                })
              ),
            };

            const newPodcastItemData: PodcastItemData = {
              ...newPodcastDetail,
              expiration: getExpireTime(oneDayTimeInMiliseconds),
            };
            const storedItemsData = localStorage.getItem('podcastsItemsData');

            if (!storedItemsData) {
              localStorage.setItem(
                'podcastsItemsData',
                JSON.stringify([newPodcastItemData])
              );
            } else {
              const storedItems = JSON.parse(storedItemsData);
              localStorage.setItem(
                'podcastsItemsData',
                JSON.stringify([...storedItems, newPodcastItemData])
              );
            }
            dispatch(podcastActions.addPodcastDetail(newPodcastDetail));
          }
        }
      } catch (error) {
        httpErrorHandler(error);
      } finally {
        dispatch(uiActions.loadingEnd());
      }
    };

    dispatch(uiActions.loadingStart());
    fetchData();
  };
};
