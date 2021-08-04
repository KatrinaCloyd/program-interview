import { arrayOf, exact, string } from 'prop-types';
import styles from './Section.module.scss';
import Card from '../Card'


const Section = ({ heading, copy, cards }) => (
  <section
    className={styles.root}
    aria-label={heading || undefined}
  >
    <h1>{heading}</h1>
    <p>{copy}</p>
    <div className={styles.container}>
      {cards.map((e) => <Card {...e} />)}
    </div>
  </section>
);

Section.propTypes = {
  heading: string.isRequired,
  copy: string.isRequired,
  cards: arrayOf(exact({
    id: string,
    name: string,
    title: string,
  })),
};


export default Section;
