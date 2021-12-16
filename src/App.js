import { Navbar, Hero , Carousel, Contact, Footer, Featured, AllFeatured } from './components/index'
import './index.css'
import { Helmet } from 'react-helmet'
import { ccIcon } from './images/index'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <Contact />
      <AllFeatured />
      <Footer />
    </div>
  );
}

export default App;
