import React from 'react'
import { IMG_CDN_URL } from '../constants';
const Resturantcard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    // const {cloudinaryImageId,name,cuisines,avgRating}=restaurant.data;
    return (
      <div className="w-[200px] p-2 m-2 shadow-lg">
        <img
          src={`${IMG_CDN_URL}${cloudinaryImageId}`}
          alt="card"
          className=''
        />
        <h2 className='font-bold text-xl'>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>Star {avgRating}</h4>
      </div>
    );
  };

export default Resturantcard