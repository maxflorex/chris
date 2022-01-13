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
        <Route path={'/'} element={<Home />} />
      </Routes>
      <Routes>
        <Route path={'/about'} element={<About />} />
      </Routes>
      <Routes>
        <Route path={'/artworks'} element={<Artworks />} />
      </Routes>
      <Routes>
        <Route path={'/collections'} element={<Collections />} />
      </Routes>
      <Routes>
        <Route path={'/contact'} element={<Contact />} />
      </Routes>
      <Routes>
        <Route path={'/collections/abstract'} element={<Abstract />} />
      </Routes>
      <Routes>
        <Route path={'/collections/catboats-fishing'} element={<CatboatsFishing />} />
      </Routes>
      <Routes>
        <Route path={'/collections/cayman-memories'} element={<CaymanMemories />} />
      </Routes>
      <Routes>
        <Route path={'/collections/liquid-flow'} element={<LiquidFlow />} />
      </Routes>
      <Routes>
        <Route path={'/collections/woman'} element={<Woman />} />
      </Routes>
      <Routes>
        <Route path={'/collections/fauna'} element={<Fauna />} />
      </Routes>
      <Routes>
        <Route path={'/collections/family-tree'} element={<FamillyTree />} />
      </Routes>
      <Routes>
        <Route path={'/collections/beach'} element={<Beach />} />
      </Routes>
      {/* END */}
      <Footer />

    </Router>
  );
}

export default App;
