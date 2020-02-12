import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/listings') // url request
      .then(res => res.json()) // json response - turning string into obj
      .then(data => setListings(data)); // update state

    // const response = await fetch('http://localhost:5000/listings');
    // const data = await response.json();
    // setListings(data);
  }, []);

  if (listings.length == 0) return false;
  return (
    <Fragment>
      <ListingContainer>
        {listings.map(listing => (
          <StyledListing key={listing.id}>
            <Image src={listing.photoUrl} />
            <ListingText>
              <Price>${listing.price.toLocaleString()}</Price>
              <Street>{listing.address.street}</Street>
              <CityStateZip>
                {listing.address.city}, {listing.address.stateCode}{' '}
                {listing.address.zip}
              </CityStateZip>
              <Bedrooms>{listing.bedrooms} Beds</Bedrooms>
              <Bathrooms>{listing.bathrooms} Baths</Bathrooms>
              <Floorspace>{listing.floorspace} sqft</Floorspace>
            </ListingText>
          </StyledListing>
        ))}
      </ListingContainer>
    </Fragment>
  );
};

export default Listings;

const ListingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const StyledListing = styled.div`
  background-color: white;
  border-radius: 10px;
  line-height: 1.5;
  margin-bottom: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.18);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 213px;
  border-radius: 10px 10px 0px 0px;

  @media only screen and (max-width: 600px) {
    max-height: 140px;
  }
`;

const ListingText = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 70% 30%;
  padding: 10px;
`;

const Price = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  font-weight: 700;
  color: #188665;
`;

const Street = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
  font-weight: 500;
`;

const CityStateZip = styled.div`
  grid-row: 3/4;
  grid-column: 1/2;
  color: #555;
`;

const Bedrooms = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  border-left: 1px solid #ddd;
  padding-left: 10px;
`;

const Bathrooms = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  border-left: 1px solid #ddd;
  padding-left: 10px;
`;

const Floorspace = styled.div`
  grid-row: 3/4;
  grid-column: 2/3;
  border-left: 1px solid #ddd;
  padding-left: 10px;
`;
