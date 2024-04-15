import React, { useContext } from 'react'
import { IMG_CDN_URL } from '../constants';
import UserContext from '../utils/UserContext';

const Resturantcard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  const { loggedInuser } = useContext(UserContext);
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
      <h1>User : {loggedInuser}</h1>
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