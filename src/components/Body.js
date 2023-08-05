import React, { useState, useEffect } from "react";
import { resturantList } from "../constants";
import Resturantcard from "./Resturantcard";
import Shimmer from "./Shimmer";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_DATA } from "./API_DATA";
import { filterData } from "../utils/helper";
import { useResturantMain } from "../utils/useResturantMain";
import useOnline from "../utils/useOnline";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { resturants, filterResturants } = useResturantMain();
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴 you are offline, please check your internat connection!</h1>;
  }
  if (!resturants) return null;
  return resturants.length === 0 ? (
    <Shimmer />
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
        {filterResturants.length == 0 ? <h1>No match Found</h1> : null}
        {filterResturants.map((restaurant) => {
          return (
            <React.Fragment key={restaurant.info.id}>
              <Link to={`/resturant/${restaurant.info.id}`}>
                <Resturantcard {...restaurant.info} />
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Body;
