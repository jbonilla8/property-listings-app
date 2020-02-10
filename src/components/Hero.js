import React from 'react';
import styled from 'styled-components';

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
  background: rgba(44, 68, 78, 0.92);
  padding: 40px;
  border-radius: 10px;

  h1 {
    font-size: 3.2em;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.7em;
  }
`;

const Input = styled.input`
  font-size: 1.5em;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 0px;
  width: 70%;
  background: #f2e4d9;
  border: none;
  border-radius: 8px 0px 0px 8px;
  color: #1a3744;
  ::placeholder {
    color: #586d77;
  }
`;

const SearchButton = styled.button`
  font-size: 1.5em;
  padding: 10px 25px;
  border: none;
  border-radius: 0px 8px 8px 0px;
  color: #162e38;
  margin-right: 0px;
  background-color: #e16758;
  cursor: pointer;
`;

const Hero = props => {

  return (
    <HeroContainer>
      <HeroInner>
        <h1>Property Listings Search</h1>
        <p>We'll help you find the home of your dreams</p>
        <Input type="text" placeholder="Enter an address, city, or ZIP code" />
        <SearchButton>Search</SearchButton>
      </HeroInner>
    </HeroContainer>
  );
};

export default Hero;
