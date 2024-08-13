import Head from 'next/head';
import Hero from '../components/Hero';
import SkillsSection from '@/components/SkillsSection';
import SummarySection from '@/components/SummarySection';
import ProjectsSection from '@/components/ProjectsSection';
import Skills from '@/components/Skills'


const Home = () => (
  <divbg-githubGray px-4 py-4 md:pt-8 md:px-8 lg:px-12>
    <Head>
      <title>Popoola Muhammed</title>
      <meta name="description" content="Welcome to my developer portfolio" />
    </Head>

    <Hero />
    <SummarySection />
    <SkillsSection />
    <ProjectsSection />

    <div className=''>
    <p>
      Portfolio developed and designed by Hammed for 6ixville Inc.  
    </p>
   </div>
  </div>
);

export default Home;
