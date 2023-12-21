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
      <h4 className=''>Star {avgRating}</h4>
    </div>
  );
};

export const WithPromotedLabel = (Resturantcard) => {
  return ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (
      <div>
        <label>Promoted</label>
        <Resturantcard cloudinaryImageId={cloudinaryImageId} name={name} cuisines={cuisines} avgRating={avgRating} />
      </div>
    )
  }
}

export default Resturantcard