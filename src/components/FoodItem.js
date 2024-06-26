import React, { useContext } from 'react'
import { IMG_CDN_URL } from '../constants';

const FoodItem = ({ cloudinaryImageId, name, description, price, defaultPrice }) => {
    return (
        <div className="w-[200px] p-2 m-2 shadow-lg">
            <img
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZpPaGzAGR1cB1IL0KZd3cg6G6Jv7tHyyFKKoEHEQbQ&s` || `${IMG_CDN_URL}${cloudinaryImageId}`}
                alt="card"
                className=''
            />
            <h2 className='font-bold text-xl'>{name}</h2>
            <h3>{description}</h3>
            <h4 className=''>Price {price / 100 || defaultPrice / 100}</h4>
        </div>
    );
};
export default FoodItem