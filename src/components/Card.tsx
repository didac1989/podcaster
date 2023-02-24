import styles from './Card.module.scss';

export type CardProps = {
  classes?: string;
  children: React.ReactNode;
};

const Card = ({ classes, children }: CardProps) => {
  return <div className={`${styles.card} ${classes}`}>{children}</div>;
};

export default Card;
