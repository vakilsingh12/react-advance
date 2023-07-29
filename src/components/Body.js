import React, { useState, useEffect } from "react";
import { resturantList } from "../constants";
import Resturantcard from "./Resturantcard";
import Shimmer from "./Shimmer";
import axios from "axios";
import {Link} from 'react-router-dom';
import {API_DATA} from './API_DATA';
const filterData = (searchText, resturants) => {
  const filterDatares = resturants.filter((resturant) =>
    resturant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filterDatares;
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  if (!resturants) return null;
  return resturants.length === 0 ? (
    <Shimmer  />
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
      {/* {console.log(filterResturants)} */}
      <div className="resturant-list">
      {filterResturants.length==0?<h1>No match Found</h1>:null}
        {filterResturants.map((restaurant) => {
          return (
            <React.Fragment key={restaurant.info.id}>
            <Link to={`/resturant/${restaurant.info.id}`}><Resturantcard {...restaurant.info} /></Link>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Body;
