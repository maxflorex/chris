import { Navbar, Hero, Carousel, Contact, Footer, Featured, AllFeatured, Gallery, Gallery2 } from './components/index'
import './index.css'


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <Contact />
      <AllFeatured />
      <Footer />
      {/* <Gallery2 /> */}
    </div>
  );
}

export default App;
