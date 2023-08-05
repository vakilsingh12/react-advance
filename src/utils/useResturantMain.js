import { useState, useEffect } from "react";
import { GET_RESTUARNT } from "../constants";

export const useResturantMain = () => {
  const [resturants, setResturants] = useState([]);
  const [filterResturants, setFilterResturants] = useState([]);

  useEffect(() => {
    getResturant();
  }, []);

  const getResturant = async () => {
    const data = await fetch(GET_RESTUARNT);
    const json = await data.json();
    setResturants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResturants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return { resturants, filterResturants };
};
