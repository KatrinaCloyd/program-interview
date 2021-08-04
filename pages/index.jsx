import { exact, string, object } from 'prop-types';
import Head from 'next/head';
import Section from '../src/components/Section';
import api from '../data/api.json';


const Home = ({ data }) => (
  <>
    <Head>
      <title>{data.home.title}</title>
      <meta name="description" content={data.home.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Section {...data.home.section} />
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
