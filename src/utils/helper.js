export const filterData = (searchText, resturants) => {
    const filterDatares = resturants.filter((resturant) =>
      resturant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filterDatares;
  };