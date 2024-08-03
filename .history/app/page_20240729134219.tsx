import Head from 'next/head';
import Hero from '../components/Hero';


const Home = () => (
  <div>
    <Head>
      <title>Developer Portfolio</title>
      <meta name="description" content="Welcome to my developer portfolio" />
    </Head>
    
    <Hero />
    
  </div>
);

export default Home;