import React, { useState, useEffect } from 'react';

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(async () => {
    // fetch('http://localhost:5000/listings') // url request
    //   .then(res => res.json()) // json response - turning string into obj
    //   .then(data => setListings(data)); // update state

      const response = await fetch('http://localhost:5000/listings');
      const data = await response.json(); 
      setListings(data);

  }, []);

  if(listings.length == 0) return false;
  return <div>{listings[0].id}</div>
};

export default Listings;
