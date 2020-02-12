import React from 'react';
import styled from 'styled-components';

const Hero = props => {
  return (
    <HeroContainer>
      <HeroInner>
        <h1>Property Listings Search</h1>
        <p>Where dream homes come true.</p>
        <Input type="text" placeholder="Enter an address, city, or ZIP code" />
        <SearchButton>Search</SearchButton>
      </HeroInner>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url('../../img/kitchen.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
`;

const HeroInner = styled.div`
  color: #fff;
  background: rgba(19, 54, 70, 0.92);
  padding: 40px;
  border-radius: 10px;

  h1 {
    font-size: 2.8em;
    margin-bottom: 0.5em;
  }

  p {
    font-family: 'PT Serif', serif;
    font-size: 1.7em;
    letter-spacing: 2px;
  }
`;

const Input = styled.input`
  font-size: 1.5em;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 0px;
  width: 70%;
  background: #fff;
  border: none;
  border-radius: 8px 0px 0px 8px;
  color: #1a3744;
  ::placeholder {
    color: #586d77;
  }
`;

const SearchButton = styled.button`
  font-size: 1.5em;
  font-weight: 500;
  padding: 10px 25px;
  border: none;
  border-radius: 0px 8px 8px 0px;
  color: #17262d;
  margin-right: 0px;
  background-color: #70b77e;
  cursor: pointer;

  &:hover {
    background-color: #D5A021;
  }
`;
