import React, { useState, useEffect } from "react";
import { resturantList } from "../constants";
import Resturantcard from "./Resturantcard";
import Shimmer from "./Shimmer";
const filterData = (searchText, resturants) => {
  const filterData = resturants.filter((resturant) =>
    resturant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  console.log("filterData====", filterData);
  return filterData;
};
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resturants, setResturants] = useState([]);
  const [filterResturants, setFilterResturants] = useState([]);
  useEffect(() => {
    getResturant();
  }, []);
  const getResturant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.9002695&lng=75.8581159&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResturants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterResturants(json?.data?.cards[2]?.data?.data?.cards);
  };
  if (!resturants) return null;
  return resturants.length === 0 ? (
    <Shimmer resturants={resturants} />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, resturants);
            setFilterResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
      {filterResturants.length==0?<h1>No match Found</h1>:null}
        {filterResturants.map((restaurant) => {
          return (
            <Resturantcard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
