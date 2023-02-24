import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/useStore';

import styles from './Header.module.scss';

const Header = () => {
  const { loading } = useAppSelector((state) => state.ui);
  return (
    <div className={styles.headerConatiner}>
      <div className={styles.header}>
        <Link to="/" className={styles.title}>
          Podcaster
        </Link>
        {loading && <div className={styles.loading} title="loading"></div>}
      </div>
      <hr />
    </div>
  );
};

export default Header;
