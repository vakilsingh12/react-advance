import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturant";
import ResturantCategory from "./ResturantCategory";
const ResturantDetail = () => {
  // how to read dynamic URL params
  const { id } = useParams();
  let dummy = "Dummy data";
  const { resturant, resturantMenu, categories } = useResturant(id);
  const [item, setItem] = useState(null);
  const itemHandler = (index) => {
    setItem(index)
  }
  return !resturant && !resturantMenu ? (
    <Shimmer />
  ) : (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl ">{resturant.name}</h1>
      <p className="font-bold text-lg">{resturant.cuisines.join(", ")}-{resturant.costForTwoMessage}</p>
      {/* categories accordian */}
      {/* ResturantCategory controlled component here */}
      {categories.map((category, index) => {
        return (<ResturantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index == item} itemHandler={() => itemHandler(index)} dummy={dummy} />)
      })}
    </div>
  );
};
export default ResturantDetail;
