import { string } from 'prop-types';
import styles from './Card.module.scss';


const Card = ({ name }) => (
  <article
    className={styles.root}
    aria-label={name || undefined}
  >
  </article>
);

Card.propTypes = {
  name: string.isRequired,
  title: string.isRequired,
};


export default Card;
