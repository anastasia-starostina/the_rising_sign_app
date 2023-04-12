import './index.css';
import Home from './Home';
import {
  Route,
  Router,
  Routes,
} from 'react-router-dom';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Explore from './pages/Explore';
import Horoscopes from './pages/Horoscopes';
import ProgressBar from '@badrap/bar-of-progress';

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
});


export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/horoscopes" element={<Horoscopes />} />
    </Routes>
  );
}


export default App;
