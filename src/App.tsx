import './index.css';
import Home from './Home';
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Explore from './pages/Explore';
import Horoscopes from './pages/Horoscopes';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';

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
