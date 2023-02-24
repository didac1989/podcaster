import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { PodcastDetail, PodcastEntryI } from '../podcast.types';

type PodcastProps = {
  podcasts: PodcastEntryI[];
  podcastDetail: PodcastDetail | null;
};

const initialState: PodcastProps = {
  podcasts: [],
  podcastDetail: null,
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
  },
});

export const podcastActions = podcastSlice.actions;

export default podcastSlice.reducer;
