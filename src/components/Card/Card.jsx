import { string } from 'prop-types';
import styles from './Card.module.scss';

const Card = ({ name }) => (
  <article
    className={styles.root}
    aria-label={name || undefined}
  >
    {/* Content */}
  </article>
);

Card.propTypes = {
  name: string,
  title: string,
};

export default Card;
