import { arrayOf, exact, string } from 'prop-types';
import styles from './Section.module.scss';


const Section = ({ heading, copy }) => (
  <section
    className={styles.root}
    aria-label={heading || undefined}
  >
    <h1>{heading}</h1>
    <p>{copy}</p>
    <div className={styles.container}>
      {/* Cards */}
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
