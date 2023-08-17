
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import { HeroCerts } from '../sections';
import Certificates from '../sections';


const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <div className="gradient-03 z-0" />

      <HeroCerts />
      <Certificates />
    </div>
    
    <Footer />
  </div>
);

export default Home;
