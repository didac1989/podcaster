import { PodcastEntryI } from '../podcast.types';

export type PodcastDetailReq = {
  resultCount: number;
  results: { feedUrl: string }[];
};

export type PodcastDetailLocationState = {
  podcastEntry: PodcastEntryI;
};
