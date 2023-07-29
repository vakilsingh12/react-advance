import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
const ResturantDetail = () => {
  // how to read dynamic URL params
  const { id } = useParams();
  const [resturant, setResturant] = useState(null);
  const [resturantMenu, setResturantMenu] = useState(null);
  useEffect(() => {
    getResturantInfo();
  }, []);
  const getResturantInfo = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    let json = await data.json();
    // json=JSON.parse(json)
    console.log(json)
    setResturant(json?.data?.cards[0]?.card?.card?.info);
    setResturantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };
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
