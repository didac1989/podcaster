import { useEffect, useState } from 'react';

import PodcastList from '../components/podcastlist/PodcastList';
import SearchBox from '../components/sreachbox/SearchBox';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { fetchPodcasts } from '../store/podcastActions';
import { PodcastEntryI } from '../podcast.types';

// TODO: Pagination or scroll loading

const Podcasts = () => {
  const dispatch = useAppDispatch();

  const { podcasts } = useAppSelector((state) => state.podcast);
  const [search, setSearch] = useState<string>('');
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastEntryI[]>([]);

  useEffect(() => {
    dispatch(fetchPodcasts());
  }, [dispatch]);

  useEffect(() => {
    if (podcasts.length > 0) setFilteredPodcasts(podcasts);
  }, [podcasts]);

  const onSearchChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const searchText = event.currentTarget.value;
    setSearch(searchText);
    const filteredPodcasts = podcasts.filter((podcast) => {
      return (
        podcast.title.toLowerCase().includes(searchText.toLowerCase()) ||
        podcast.artist.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilteredPodcasts(filteredPodcasts);
  };

  return (
    <div>
      <SearchBox
        resultsNumber={filteredPodcasts.length}
        value={search}
        onSearchChangeHandler={onSearchChangeHandler}
      />
      <PodcastList podcasts={filteredPodcasts} />
    </div>
  );
};

export default Podcasts;
