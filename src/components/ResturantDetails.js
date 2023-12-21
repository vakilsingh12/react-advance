import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturant";
import ResturantCategory from "./ResturantCategory";
const ResturantDetail = () => {
  // how to read dynamic URL params
  const { id } = useParams();
  const { resturant, resturantMenu, categories } = useResturant(id);
  return !resturant && !resturantMenu ? (
    <Shimmer />
  ) : (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl ">{resturant.name}</h1>
      <p className="font-bold text-lg">{resturant.cuisines.join(", ")}-{resturant.costForTwoMessage}</p>
      {/* categories accordian */}
      {categories.map((category) => {
        return (<ResturantCategory data={category?.card?.card} />)
      })}
    </div>
  );
};
export default ResturantDetail;
