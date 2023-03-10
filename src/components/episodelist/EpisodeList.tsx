import { getFormattedDate, getFormattedDuration } from '../../helpers/helpers';
import { PodcastEpisode } from '../../podcast.types';
import styles from './EpisodeList.module.scss';

// TODO: Pagination or scroll loading

const EpisodeList = ({
  episodes,
  onClick,
}: {
  episodes: PodcastEpisode[];
  onClick: (episode: PodcastEpisode) => void;
}) => {
  return (
    <div className={styles.tableContainer} role="table" aria-label="episodes">
      <div className={`${styles.row} ${styles.header}`} role="rowheader">
        <div className={styles.col} role="columnheader">
          Title
        </div>
        <div className={styles.col} role="columnheader">
          Date
        </div>
        <div className={styles.col} role="columnheader">
          Duration
        </div>
      </div>
      {episodes.map((episode) => (
        <div key={episode.id} className={styles.row} role="rowgroup">
          <div
            className={`${styles.col} ${styles.link}`}
            role="cell"
            onClick={() => onClick(episode)}
          >
            {episode.title}
          </div>
          <div className={styles.col} role="cell">
            {getFormattedDate(episode.published)}
          </div>
          <div className={styles.col} role="cell">
            {typeof episode.itunes_duration === 'number'
              ? getFormattedDuration(episode.itunes_duration)
              : episode.itunes_duration}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;
