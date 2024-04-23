import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturant";
import ResturantCategory from "./ResturantCategory";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ResturantDetail = () => {
  // how to read dynamic URL params
  const { id } = useParams();
  const dispatch = useDispatch();
  let dummy = "Dummy data";
  const { resturant, resturantMenu, categories } = useResturant(id);
  const [item, setItem] = useState(null);
  const itemHandler = (index) => {
    setItem(index)
  }
  const handleAddItem = () => {
    dispatch(addItem("Grapes"))
  }
  return !resturant && !resturantMenu ? (
    <Shimmer />
  ) : (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl ">{resturant.name}</h1>
      <p className="font-bold text-lg">{resturant.cuisines.join(", ")}-{resturant.costForTwoMessage}</p>
      <div>
        <button className="m-5 p-2 bg-green-100" onClick={handleAddItem}>Add item</button>
      </div>
      {/* categories accordian */}
      {/* ResturantCategory controlled component here */}
      {categories.map((category, index) => {
        return (
          <ResturantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index == item} itemHandler={() => itemHandler(index)} dummy={dummy} />
        )
      })}
    </div>
  );
};
export default ResturantDetail;
