import { Footer, Navb } from './components/index';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections/Collections';
import Contact from './pages/Contact';
import Artworks from './pages/Artworks';
import ErrorPage from './pages/Collections/ErrorPage';
import Dashboard from './pages/Dashboard';
import { Abstract, Beach, CatboatsFishing, CaymanMemories, FamillyTree, Fauna, LiquidFlow, Woman } from './pages/Collections/index'
import { Login } from './components/Login';
import Form from './components/forms/Form';
import Explore from './components/Explore';


function App() {

  return (
    <Router>

      <Navb />
      {/* START */}
      <Routes>
        <Route path={'/about'} element={<About />} />
        <Route path={'/artworks'} element={<Artworks />} />
        <Route path={'/abstract'} element={<Abstract />} />
        <Route path={'/catboats-fishing'} element={<CatboatsFishing />} />
        <Route path={'/cayman-memories'} element={<CaymanMemories />} />
        <Route path={'/liquid-flow'} element={<LiquidFlow />} />
        <Route path={'/woman'} element={<Woman />} />
        <Route path={'/login'} element={<Dashboard />} />
        <Route path={'/fauna' }element={<Fauna />} />
        <Route path={'/family-tree'} element={<FamillyTree />} />
        <Route path={'/beach'} element={<Beach />} />
        <Route path={'/collections'} element={<Collections />} />
        <Route path={'/explore'} element={<Explore />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route exact path={'/'} element={<Home />} />

      </Routes>
      {/* END */}
      <Footer />

    </Router>
  );
}

export default App;
