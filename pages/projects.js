
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import HeroProjects from '../sections/HeroProjects';
import Projects from '../sections/Projects';


const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <div className="gradient-03 z-0" />

      <HeroProjects />
      <Projects/>
    </div>
    
    <Footer />
  </div>
);

export default Home;
