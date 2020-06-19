import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontFamily } from '../Shared/Styles/GlobalStyles';
import { Size } from '../Shared/Styles/GlobalStyles';
import HouseIcon from '../../images/house-icon.png';

import Hero from '../Hero';
import Listings from '../Listings';
import Favorites from '../Favorites';

const Navigation = props => {
  const navIconClickedHandler = () => {
    alert('clicked!');
  };

  return (
    <Fragment>
      <UnorderedList>
        <ListItems>
          <Link to="/">
            <img src={HouseIcon} alt="House icon that takes you back to homepage" />
          </Link>
        </ListItems>
        <ListItems>
          <Link to="/listings">Buy</Link>
        </ListItems>
        <ListItems>
          <Link to="/listings">Rent</Link>
        </ListItems>
        <ListItems>
          <Link to="/favorites">Saved Homes</Link>
        </ListItems>
        <NavIcon onClick={navIconClickedHandler}>
          <div></div>
        </NavIcon>
      </UnorderedList>

      <Route path="/" exact component={Hero} />
      <Route path="/listings" component={Listings} />
      <Route path="/favorites" component={Favorites} />
    </Fragment>
  );
};

export default Navigation;

const UnorderedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: auto;
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  font-weight: 500;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
`;

const ListItems = styled.li`
  margin: 20px 30px;

  img {
    height: 1.5rem;
    width: 1.5rem;
  }

  a {
    position: relative;
    text-decoration: none;
    color: #162e38;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    padding-bottom: 0.4rem;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: #888;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

const NavIcon = styled.div`
  width: 34px;
  cursor: pointer;
  margin-right: 30px;

  &:after,
  &:before,
  div {
    background-color: black;
    border-radius: 3px;
    content: '';
    display: block;
    height: 4px;
    margin: 6px 0;
  }

  @media screen and (min-width: ${Size.tablet}) {
    display: none;
  }
`;

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
