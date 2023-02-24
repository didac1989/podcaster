import { PodcastEntryI, PodcastsEntryReq } from '../podcast.types';

export const simplifyRequestPodcastsEntry = (reqEntries: PodcastsEntryReq[]) =>
  reqEntries.map((entry: PodcastsEntryReq) => {
    const simplifiedEntry: PodcastEntryI = {
      id: entry.id.attributes['im:id'],
      name: entry['im:name'].label,
      title: entry.title.label,
      artist: entry['im:artist'].label,
      image: entry['im:image'].map((image) => ({
        height: image.attributes.height,
        label: image.label,
      })),
    };
    return simplifiedEntry;
  });
