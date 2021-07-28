import { exact, string, object } from 'prop-types';
import Head from 'next/head';
import api from '../data/api.json';


const Home = () => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1>Hello World</h1>
    </main>
  </>
);

export const getStaticProps = async () => {
  const data = await Promise.resolve(api);
  return { props: { data } };
};

Home.propTypes = {
  data: exact({
    home: exact({
      id: string,
      title: string,
      description: string,
      section: object,
    }),
  }),
};

export default Home;
