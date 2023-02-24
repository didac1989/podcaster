export type PodcastsData = {
  podcasts: PodcastEntryI[];
  expiration: number;
};

export interface PodcastEntryI {
  id: string;
  name: string;
  title: string;
  artist: string;
  image: { height: string; label: string }[];
}

export type PodcastsEntryReq = {
  id: { attributes: { 'im:id': string } };
  'im:image': { attributes: { height: string }; label: string }[];
  'im:artist': { label: string };
  'im:name': { label: string };
  title: { label: string };
};

export interface PodcastDetail extends PodcastEntryI {
  description: string;
  items: PodcastEpisode[];
}

export interface PodcastItemData extends PodcastDetail {
  expiration: number;
}

export type PodcastEpisode = {
  id: number;
  title: string;
  description: string;
  created: number;
  published: number;
  link: string | undefined;
  media: { thumbnail: Thumbnail | Thumbnail[] | undefined };
  enclosures: [EnclosureA, EnclosureB];
  content_encoded: string;
  itunes_author: string;
  itunes_duration: number | string;
  itunes_season: number;
  itunes_episode: number;
  itunes_episodeType: string;
  itunes_image: { href: string };
  category: string[];
  content: string;
};

type EnclosureA = {
  length?: string;
  type: string;
  url: string;
};

type EnclosureB = [
  { 'media:player': { url: string }; type: string; url: string },
  { type: string; url: string }
];

type Thumbnail = {
  medium?: string;
  type: string;
  url: string;
  'media:player'?: { url: string };
};
