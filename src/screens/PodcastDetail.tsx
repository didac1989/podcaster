import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { fetchPodcastDetail, fetchPodcasts } from '../store/podcastActions';

const PodcastDetail = () => {
  const dispatch = useAppDispatch();
  const { podcastId } = useParams<{
    podcastId: string;
  }>();
  const { podcasts } = useAppSelector((state) => state.podcast);

  useEffect(() => {
    if (podcasts.length > 0) {
      dispatch(fetchPodcastDetail(podcastId));
    } else {
      dispatch(fetchPodcasts());
    }
  }, [podcasts, podcastId, dispatch]);

  return <div>PodcastDetail</div>;
};

export default PodcastDetail;
