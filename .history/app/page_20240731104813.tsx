import Head from 'next/head';
import Hero from '../components/Hero';
import SkillsSection from '@/components/SkillsSection';


const Home = () => (
  <div>
    <Head>
      <title>Popoola Muhammed</title>
      <meta name="description" content="Welcome to my developer portfolio" />
    </Head>
    
    <Hero />
    <SkillsSection /
  </div>
);

export default Home;