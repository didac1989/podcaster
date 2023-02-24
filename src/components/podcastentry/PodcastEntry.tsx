import { useHistory } from 'react-router-dom';

import Card from '../Card';
import { PodcastEntryI } from '../../podcast.types';
import styles from './PodcastEntry.module.scss';

const PodcastEntry = ({ podcast }: { podcast: PodcastEntryI }) => {
  const history = useHistory();

  const handlePodcastClick = () => {
    history.push(`/podcast/${podcast.id}`);
  };

  return (
    <li className={styles.listItem}>
      <Card classes={styles.podcastCard}>
        <img src={podcast.image[2].label} alt={podcast.name} />

        <div
          className={styles.podcastCardData}
          onClick={() => handlePodcastClick()}
          title={podcast.title}
        >
          <div className={styles.title}>{podcast.title}</div>
          <div className={styles.author}>Author: {podcast.artist}</div>
        </div>
      </Card>
    </li>
  );
};

export default PodcastEntry;
