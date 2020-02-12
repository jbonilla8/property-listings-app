import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Hero from '../Hero';
import Listings from '../Listings';
import Favorites from '../Favorites';

const Navigation = props => {
  return (
    <div>
      <UnorderedList>
        <ListItems>
          <Link to="/">Search</Link>
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
        {/* <NavIcon>
          <div></div>
        </NavIcon> */}
      </UnorderedList>

      <Route path="/" exact component={Hero} />
      <Route path="/listings" component={Listings} />
      <Route path="/favorites" component={Favorites} />
    </div>
  );
};

export default Navigation;

const UnorderedList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  font-weight: 500;
`;

const ListItems = styled.li`
  margin: 10px 30px;
  a {
    text-decoration: none;
    color: #162e38;
    font-size: 1.2em;

    &:hover {
      color: #70b77e;
    }
  }
`;

const NavIcon = styled.div`
  width: 34px;
  cursor: pointer;

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
`;
