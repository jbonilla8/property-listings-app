import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Hero from '../Hero';
import Listings from '../Listings';
import Favorites from '../Favorites';

const Navigation = props => {
  return (
    <Fragment>
      <UnorderedList>
        <ListItems>
          <Link to="/">LOGO</Link>
        </ListItems>
        {/* <ListItems>
          <Input
            type="text"
            placeholder="Enter an address, city, or ZIP code"
          />
        </ListItems> */}
        <ListItems>
          <Link to="/listings">Buy</Link>
        </ListItems>
        <ListItems>
          <Link to="/listings">Rent</Link>
        </ListItems>
        <ListItems>
          <Link to="/favorites">Saved Homes</Link>
        </ListItems>
        <NavIcon>
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
  display: flex;
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  font-weight: 500;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
`;

const ListItems = styled.li`
  margin: 20px 30px;
  a {
    text-decoration: none;
    color: #162e38;
    font-size: 1.2em;

    &:hover {
      color: #888;
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
