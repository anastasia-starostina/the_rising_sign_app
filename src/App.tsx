import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./pages/About'));
const NoMatch = React.lazy(() => import('./pages/NoMatch'));
const Explore = React.lazy(() => import('./pages/Explore'));
const Horoscopes = React.lazy(() => import('./pages/Horoscopes'));

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/explore"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Explore />
          </Suspense>
        }
      />
      <Route
        path="/horoscopes"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Horoscopes />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
