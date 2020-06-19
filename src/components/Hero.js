import React from 'react';
import styled from 'styled-components';
import MagnifyingGlass from '../images/magnifying glass.png';
import HeroBackgroundImg from '../images/kitchen.jpeg';
import { FontFamily } from './Shared/Styles/GlobalStyles';

const Hero = props => {
  return (
    <HeroContainer>
      <HeroInner>
        <h1>Home Scout</h1>
        <p>Find your new sweet diggings.</p>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Enter an address, city, or ZIP code"
          />
          <SearchButton>
            <img src={MagnifyingGlass} alt="magnifying glass" />
          </SearchButton>
        </SearchContainer>
      </HeroInner>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(${HeroBackgroundImg});
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
  margin-left: 2rem;
  margin-right: 2rem;

  h1 {
    font-family: ${FontFamily.Cabin}, serif;
    font-size: 2.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-family: ${FontFamily.PTSans}, serif;
    font-size: 1.7em;
    letter-spacing: 2px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  margin: auto;
  max-width: 410px;
`;

const SearchInput = styled.input`
  font-family: ${FontFamily.PTSans};
  font-size: 1.2em;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80%;
  background: #fff;
  border: none;
  border-radius: 8px 0px 0px 8px;
  color: #1a3744;
  ::placeholder {
    font-size: 0.9em;
    color: #586d77;
  }
`;

const SearchButton = styled.button`
  width: 20%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 25px;
  border: none;
  border-radius: 0px 8px 8px 0px;
  color: #17262d;
  background-color: #bdbdbd;
  cursor: pointer;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    background-color: #999;
  }
`;
