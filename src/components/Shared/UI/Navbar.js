import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import HouseIcon from '../../../images/house-icon.png';
import NavBurger from './NavBurger';
import { Link } from 'react-router-dom';
import { Size } from '../Styles/GlobalStyles';

const Navbar = props => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {/* <HorizontalNavContainer>
        <UnorderedList>
          <ListItems>
            <Link to="/">
              <img
                src={HouseIcon}
                alt="House icon that takes you back to homepage"
              />
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
        </UnorderedList>
      </HorizontalNavContainer> */}

      <NavBurger open={open} setOpen={setOpen} />
      
      <VerticalNavContainer open={open}>
        <NavItems>
          <Item>
            <Link to="/">
              <img
                src={HouseIcon}
                alt="House icon that takes you back to homepage"
              />
              <Brand>Home Scout</Brand>
            </Link>
          </Item>
          <Item>
            <Link to="/listings">Buy</Link>
          </Item>
          <Item>
            <Link to="/listings">Rent</Link>
          </Item>
          <Item>
            <Link to="/favorites">Saved Homes</Link>
          </Item>
        </NavItems>
      </VerticalNavContainer>
    </Fragment>
  );
};

export default Navbar;

// Top navbar
// const HorizontalNavContainer = styled.div`
//   @media screen and (max-width: ${Size.tablet}) {
//     display: none;
//   }
// `;

// const UnorderedList = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(5, auto);
//   grid-template-rows: auto;
//   position: fixed;
//   top: 0;
//   overflow: hidden;
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   background-color: rgba(189, 189, 189, 0.8);
//   justify-content: space-around;
//   align-items: center;
//   list-style-type: none;
//   font-weight: 500;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
// `;

// const ListItems = styled.li`
//   margin: 20px 30px;

//   img {
//     height: 1.5rem;
//     width: 1.5rem;
//   }

//   a {
//     position: relative;
//     text-decoration: none;
//     color: #162e38;
//     font-size: 1.2rem;
//     letter-spacing: 0.2rem;
//     padding-bottom: 0.4rem;

//     &::before {
//       content: '';
//       position: absolute;
//       width: 100%;
//       height: 3px;
//       bottom: 0;
//       left: 0;
//       background-color: #888;
//       visibility: hidden;
//       transform: scaleX(0);
//       transition: all 0.3s ease-in-out 0s;
//     }

//     &:hover::before {
//       visibility: visible;
//       transform: scaleX(1);
//     }
//   }
// `;

const VerticalNavContainer = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 20rem;
  font-size: 1rem;
  z-index: 10;
  -webkit-box-shadow: -10px 0px 35px -18px rgba(0, 0, 0, 1);
  -moz-box-shadow: -10px 0px 35px -18px rgba(0, 0, 0, 1);
  box-shadow: -10px 0px 35px -18px rgba(0, 0, 0, 1);
  background-color: rgba(189, 189, 189, 0.92);
`;

const NavItems = styled.div`
  display: block;
  flex-wrap: nowrap;
  padding-top: 5rem;
`;

const Item = styled.div`
  a {
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    padding: 25px 0;
    cursor: pointer;
    font-size: 1.2rem;
    text-decoration: none;

    img {
      height: 1.5rem;
      width: 1.5rem;
      padding-right: 1rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }

    &:hover {
      background-color: rgba(153, 153, 153, 0.8);
    }
  }
`;

const Brand = styled.div`
  font-weight: 700;
`;
