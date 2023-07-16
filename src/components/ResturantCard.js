import React from 'react'
import { IMG_CDN_URL } from '../constants';
const Resturantcard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    // const {cloudinaryImageId,name,cuisines,avgRating}=restaurant.data;
    return (
      <div className="card">
        <img
          src={`${IMG_CDN_URL}${cloudinaryImageId}`}
          alt="card"
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>Star {avgRating}</h4>
      </div>
    );
  };

export default Resturantcard