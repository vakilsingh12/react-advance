import { useState, useEffect } from "react";

const useResturant = (id) => {
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
    setResturant(json?.data?.cards[0]?.card?.card?.info);
    setResturantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };
  return { resturant, resturantMenu };
};

export default useResturant;
