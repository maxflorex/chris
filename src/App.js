import { Footer, Navb } from './components/index';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections/Collections';
import Contact from './pages/Contact';
import Artworks from './pages/Artworks';
import { Abstract, Beach, CatboatsFishing, CaymanMemories, FamillyTree, Fauna, LiquidFlow, Woman } from './pages/Collections/index'


function App() {

  return (
    <Router>

      <Navb />
      {/* START */}
      <Routes>
        <Route path={'/about'} element={<About />} />

        <Route path={'/artworks'} element={<Artworks />} />

        <Route path={'/collections'} element={<Collections />} />

        <Route path={'/contact'} element={<Contact />} />

        <Route path={'/collections/abstract'} element={<Abstract />} />

        <Route path={'/collections/catboats-fishing'} element={<CatboatsFishing />} />

        <Route path={'/collections/cayman-memories'} element={<CaymanMemories />} />

        <Route path={'/collections/liquid-flow'} element={<LiquidFlow />} />

        <Route path={'/collections/woman'} element={<Woman />} />

        <Route path={'/collections/fauna'} element={<Fauna />} />

        <Route path={'/collections/family-tree'} element={<FamillyTree />} />

        <Route path={'/collections/beach'} element={<Beach />} />

        <Route exact path={'/'} element={<Home />} />
      </Routes>
      {/* END */}
      <Footer />

    </Router>
  );
}

export default App;
