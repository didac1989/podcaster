import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../components/Card';
import Episode from '../../components/episode/Episode';
import PodcastSummary from '../../components/podcastsummary/PodcastSummary';

import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { fetchPodcastDetail, fetchPodcasts } from '../../store/podcastActions';
import { podcastActions } from '../../store/podcastSlice';
import styles from './PodcastEpisode.module.scss';

const PodcastEpisode = () => {
  const dispatch = useAppDispatch();
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();
  const { podcasts, podcastDetail, podcastEpisode } = useAppSelector(
    (state) => state.podcast
  );
  const { loading } = useAppSelector((state) => state.ui);

  useEffect(() => {
    dispatch(podcastActions.addPodcastDetail(null));
    dispatch(podcastActions.addPodcastEpisode(null));
  }, [dispatch]);

  useEffect(() => {
    if (podcasts.length > 0) {
      if (!podcastDetail || podcastDetail.id !== podcastId)
        dispatch(fetchPodcastDetail(podcastId));
      else {
        const selectedEpisode = podcastDetail.items.find(
          (item) => item.id === parseInt(episodeId)
        );
        if (selectedEpisode)
          dispatch(podcastActions.addPodcastEpisode(selectedEpisode));
        else dispatch(podcastActions.addPodcastEpisode(null));
      }
    } else {
      dispatch(fetchPodcasts());
    }
  }, [podcasts, podcastDetail, podcastId, episodeId, dispatch]);

  if (loading) return <div>Loading...</div>;

  if (!podcastDetail || !podcastEpisode) return <div>Episode not found!</div>;

  return (
    <div className={styles.podcastEpisode}>
      <PodcastSummary
        {...podcastDetail}
        imgSource={podcastDetail.image[2].label}
      />

      <section className={styles.podcastEpisodeContainer}>
        <Card classes={styles.podcastEpisodeContainer}>
          <Episode episode={podcastEpisode} />
        </Card>
      </section>
    </div>
  );
};

export default PodcastEpisode;
