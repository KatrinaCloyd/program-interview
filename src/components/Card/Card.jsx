import { string } from 'prop-types';
import styles from './Card.module.scss';


const Card = ({ name, title }) => (
  <article
    className={styles.root}
    aria-label={name || undefined}
  >
    <h2>{name}</h2>
    <p>{title}</p>
  </article>
);

Card.propTypes = {
  name: string.isRequired,
  title: string.isRequired,
};


export default Card;
