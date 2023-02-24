import { PodcastEntryI } from '../../podcast.types';
import PodcastEntry from '../podcastentry/PodcastEntry';

import styles from './PodcastList.module.scss';

const PodcastList = ({ podcasts }: { podcasts: PodcastEntryI[] }) => {
  return (
    <ul className={styles.podcastsList}>
      {podcasts.map((podcast: PodcastEntryI) => (
        <PodcastEntry key={podcast.id} podcast={podcast} />
      ))}
    </ul>
  );
};

export default PodcastList;
