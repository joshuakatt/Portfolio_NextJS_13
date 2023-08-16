import { Navbar, Footer } from '../components';
import { About, GetStarted } from '../sections';

const AboutPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <About />
    <GetStarted />
    <Footer />
  </div>
);

export default AboutPage;
