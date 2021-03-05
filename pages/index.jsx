import { exact, string, object } from 'prop-types';
import Head from 'next/head';
import Section from '../src/components/Section';
import api from '../data/api.json';

const Home = ({ data }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Section />
    </main>
  </>
);

export const getStaticProps = async () => {
  // Mock data fetch
  const data = await Promise.resolve(api);

  return {
    props: {
      data,
    }
  }
};

Home.propTypes = {
  data: exact({
    home: exact({
      id: string,
      title: string,
      description: string,
      intro: object,
    }),
  }),
};

export default Home;
