import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Shared/UI/Navbar';
import Hero from './components/Hero';
import Listings from './components/Listings';
import Favorites from './components/Favorites';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Hero} />
      <Route path="/listings" component={Listings} />
      <Route path="/favorites" component={Favorites} />
    </BrowserRouter>
  );
}

export default App;

const Input = styled.input`
  font-size: 1em;
  padding: 10px;
  width: 100%;
  background-color: #eee;
  border: none;
  border-radius: 8px 0px 0px 8px;
  color: #1a3744;
  ::placeholder {
    font-size: 0.9em;
    color: #586d77;
  }
`;
