import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturant";
const ResturantDetail = () => {
  // how to read dynamic URL params
  const { id } = useParams();
  const { resturant, resturantMenu } = useResturant(id);

  return !resturant && !resturantMenu ? (
    <Shimmer />
  ) : (
    <div className="resturant-menu">
      <div>
        <h1>Restrunt id : {id}</h1>
        <h2>{resturant?.name}</h2>
        <img
          src={IMG_CDN_URL + resturant?.cloudinaryImageId}
          alt={resturant.name}
        />
        <h3>{resturant?.areaName}</h3>
        <h3>{resturant?.city}</h3>
        <h3>{resturant?.avgRating} stars</h3>
        <h3>{resturant?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        {resturantMenu?.map((res, index) => {
          let { id, name } = res?.card?.info;
          return (
            <React.Fragment key={id}>
              <li>{name}</li>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default ResturantDetail;
