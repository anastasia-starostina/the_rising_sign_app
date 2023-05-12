import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const NoMatch = React.lazy(() => import('./pages/NoMatch'));
const Explore = React.lazy(() => import('./pages/Explore'));
const Horoscopes = React.lazy(() => import('./pages/Horoscopes'));

const loaderFallback = (
  <div className="loading-pane">
    <h2 className="loader">✨</h2>
    <h4>Loading...</h4>
  </div>
);

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={loaderFallback}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={loaderFallback}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/explore"
        element={
          <Suspense fallback={loaderFallback}>
            <Explore />
          </Suspense>
        }
      />
      <Route
        path="/horoscopes"
        element={
          <Suspense fallback={loaderFallback}>
            <Horoscopes />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
