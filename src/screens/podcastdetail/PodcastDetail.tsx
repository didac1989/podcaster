import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Card from '../../components/Card';
import EpisodeList from '../../components/episodelist/EpisodeList';
import EpisodesCounter from '../../components/episodescounter/EpisodesCounter';
import PodcastSummary from '../../components/podcastsummary/PodcastSummary';

import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { fetchPodcastDetail, fetchPodcasts } from '../../store/podcastActions';
import { PodcastEpisode } from '../../podcast.types';
import styles from './PodcastDetail.module.scss';

const PodcastDetail = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { podcastId } = useParams<{
    podcastId: string;
  }>();
  const { podcasts, podcastDetail } = useAppSelector((state) => state.podcast);

  useEffect(() => {
    if (podcasts.length > 0) {
      dispatch(fetchPodcastDetail(podcastId));
    } else {
      dispatch(fetchPodcasts());
    }
  }, [podcasts, podcastId, dispatch]);

  const onPodcastEpisodeClickHandler = (episode: PodcastEpisode) => {
    history.push(`/podcast/${podcastId}/episode/${episode.id}`);
  };

  if (!podcastDetail) return null;

  return (
    <div className={styles.podcastDetail}>
      <PodcastSummary
        {...podcastDetail}
        imgSource={podcastDetail.image[2].label}
      />

      <section className={styles.podcastDetailContainer}>
        <Card>
          <EpisodesCounter counter={podcastDetail.items.length} />
        </Card>
        <Card classes={styles.podcastDetailContainer}>
          <EpisodeList
            episodes={podcastDetail.items}
            onClick={onPodcastEpisodeClickHandler}
          />
        </Card>
      </section>
    </div>
  );
};

export default PodcastDetail;
