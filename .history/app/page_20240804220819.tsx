import Head from 'next/head';
import Hero from '../components/Hero';
import SkillsSection from '@/components/SkillsSection';
import SummarySection from '@/components/SummarySection';


const Home = () => (
  <div>
    <Head>
      <title>Popoola Muhammed</title>
      <meta name="description" content="Welcome to my developer portfolio" />
    </Head>
    <Container></Container>
    <Hero />
    <SkillsSection />
    <SummarySection />

  </div>
);

export default Home;