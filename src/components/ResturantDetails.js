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
    <div className="resturant-menu bg-slate-800">
      <div className="flex justify-around">
        {/* <h1>Restrunt id : {id}</h1> */}
        <div>
          <h2 className="text-white">{resturant?.name}</h2>
          <img
            src={IMG_CDN_URL + resturant?.cloudinaryImageId}
            alt={resturant.name}
          />
        </div>
        <div className="flex items-start justify-center flex-col text-white">
          <h3>Resturant name : {resturant?.areaName}</h3>
          <h3>City : {resturant?.city}</h3>
          <h3>Rating : {resturant?.avgRating} stars</h3>
          <h3>Cost : {resturant?.costForTwoMessage}</h3>
        </div>
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
