import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import styles from './page-not-found.css';

export default function NotFoundPage(): JSX.Element {
  return (

    <div className={`page ${styles.notfound}`}>
      <Helmet>
        <title>{'6 cities - Not Found'}</title>
      </Helmet>
      <h1 className={styles.title}>404 NOT FOUND</h1>
      <h3 className={styles.link}>
        <Link to={'./'}>Go to main page</Link>
      </h3>
    </div >
  );
}

