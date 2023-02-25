import HTMLReactParser from 'html-react-parser';

import styles from './PodcastSummary.module.scss';

import { useHistory } from 'react-router-dom';
import Card from '../Card';

export type PodcastSummaryProps = {
  id: string;
  imgSource: string;
  name: string;
  title: string;
  artist: string;
  description: string;
};

const PodcastSummary = ({
  id,
  imgSource,
  title,
  name,
  artist,
  description,
}: PodcastSummaryProps) => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push(`/podcast/${id}`);
  };

  return (
    <Card classes={styles.podcastSummary}>
      <img src={imgSource} alt={name} />
      <hr />
      <div className={styles.info}>
        <h4 className={styles.title} onClick={onClickHandler}>
          {title}
        </h4>
        <i className={styles.text} onClick={onClickHandler}>
          by {artist}
        </i>
      </div>
      <hr />
      <div className={styles.description}>
        <h5 className={styles.title}>Description:</h5>
        <i className={styles.text}>{HTMLReactParser(description)}</i>
      </div>
    </Card>
  );
};

export default PodcastSummary;
