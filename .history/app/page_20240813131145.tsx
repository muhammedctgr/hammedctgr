import Head from 'next/head';
import Hero from '../components/Hero';
import SkillsSection from '@/components/SkillsSection';
import SummarySection from '@/components/SummarySection';
import ProjectsSection from '@/components/ProjectsSection';
import Skills from '@/components/Skills'


const Home = () => (
  <div>
    <Head>
      <title>Popoola Muhammed</title>
      <meta name="description" content="Welcome to my developer portfolio" />
    </Head>

    <Hero />
    <SummarySection />
    <SkillsSection />
    <ProjectsSection />

    <div>
    <p>
      Portfolio developed and designed   
    </p>
   </div>
  </div>
);

export default Home;
