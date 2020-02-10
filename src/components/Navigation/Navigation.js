import React from 'react';
import styled from 'styled-components';

const UnorderedList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItems = styled.li`
  margin: 10px 30px;
  a {
    text-decoration: none;
    color: #162e38;
    font-size: 1.2em;

    &:hover {
        color: #e16758;
    }
  }
`;

const Navigation = props => {
  return (
    <div>
      <UnorderedList>
        <ListItems>
          <a href="/">Search</a>
        </ListItems>
        <ListItems>
          <a href="/">Buy</a>
        </ListItems>
        <ListItems>
          <a href="/">Rent</a>
        </ListItems>
        <ListItems>
          <a href="/">Saved Homes</a>
        </ListItems>
      </UnorderedList>
    </div>
  );
};

export default Navigation;
