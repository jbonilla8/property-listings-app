import React from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation/Navigation';
import Listings from './components/Listings';

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Listings/>
    </div>
  );
}

export default App;
