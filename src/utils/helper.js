export const filterData = (searchText, resturants) => {
  const filterDatares = resturants.filter((resturant) => {
    return resturant?.info?.name
      ?.toLowerCase()
      ?.includes(searchText?.toLowerCase());
  });
  return filterDatares;
};