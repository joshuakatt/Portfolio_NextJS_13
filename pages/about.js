import { Navbar, Footer } from '../components';
import { About } from '../sections';

const AboutPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <About />
    <Footer />
  </div>
);

export default AboutPage;
