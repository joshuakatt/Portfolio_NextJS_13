import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import Projects from '../sections/Projects';


const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <About />
      <Projects />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    
    <Footer />
  </div>
);

export default Home;
