import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { PodcastDetail, PodcastEntryI, PodcastEpisode } from '../podcast.types';

type PodcastProps = {
  podcasts: PodcastEntryI[];
  podcastDetail: PodcastDetail | null;
  podcastEpisode: PodcastEpisode | null;
};

const initialState: PodcastProps = {
  podcasts: [],
  podcastDetail: null,
  podcastEpisode: null,
};

export const podcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {
    addPodcasts: (state, action: PayloadAction<PodcastEntryI[]>) => {
      state.podcasts = action.payload;
    },
    addPodcastDetail: (state, action: PayloadAction<PodcastDetail | null>) => {
      state.podcastDetail = action.payload;
    },
    addPodcastEpisode: (
      state,
      action: PayloadAction<PodcastEpisode | null>
    ) => {
      state.podcastEpisode = action.payload;
    },
  },
});

export const podcastActions = podcastSlice.actions;

export default podcastSlice.reducer;
