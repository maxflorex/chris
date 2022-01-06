import { Navbar, Hero, Carousel, Contact, Footer, Featured, AllFeatured, Gallery, Gallery2, LandingPage, Navb, Cta, Collections, About } from './components/index'
import './index.css'


function App() {

  return (
    <div>

      <Navb />
      <Hero />
      <Carousel />
      <Cta />
      <Collections />
      <About />
      {/* <Contact />
      <AllFeatured /> */}
      {/*     
      <Gallery />
      <Gallery2 /> */}
      {/* <LandingPage /> */}
      <Footer />
    </div>
  );
}

export default App;
