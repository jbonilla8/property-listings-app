import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
