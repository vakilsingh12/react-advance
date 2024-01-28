import React, { useState, useEffect, useContext } from "react";
// import { resturantList } from "../constants";
import Resturantcard, { WithPromotedLabel } from "./Resturantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import { API_DATA } from "./API_DATA";
import { filterData } from "../utils/helper";
import { useResturantMain } from "../utils/useResturantMain";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { resturants, setResturants } = useResturantMain();
  let ResturantPromoted = WithPromotedLabel(Resturantcard);
  const isOnline = useOnline();
  const { setUserName } = useContext(UserContext);
  if (!isOnline) {
    return <h1>🔴 you are offline, please check your internat connection!</h1>;
  }
  if (!resturants) return null;
  return resturants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        <div className="p-4 my-5">
          <input
            type="text"
            className="border-2 px-5 py-3 rounded focus:bg-slate-200"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-5 py-3 m-4 bg-purple-500 hover:bg-purple-700 text-white rounded"
            onClick={() => {
              const data = filterData(searchText, resturants);
              setResturants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-lg">Top Rated Resturant</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label htmlFor="username" className="px-2">Username : </label>
          <input type="text" className="border border-black rounded px-2 py-1" onChange={(e) => setUserName(e.target.value)} />
        </div>
      </div>
      <div className="flex gap-5 flex-wrap">
        {resturants.length == 0 ? <h1>No match Found</h1> : null}
        {resturants.map((restaurant) => {
          return (
            <React.Fragment key={restaurant.info.id}>
              <Link to={`/resturant/${restaurant.info.id}`}>
                {restaurant.info.isOpen ? <Resturantcard {...restaurant.info} /> :
                  <ResturantPromoted {...restaurant.info} />}
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Body;
