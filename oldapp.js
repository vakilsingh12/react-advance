import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", { id: "title",key:"h1" }, "Hello world");
// const heading1 = React.createElement("h1", { id: "title",key:"h2" }, "Hello world2");
// const container = React.createElement("div", { id: "title" }, [
//   heading,
//   heading1,
// ]); 
import { IMG_CDN_URL } from "./constants";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// const config = [
//   {
//     type: "carousel",
//     cards: [{ offerName: "50% off" }, { offerName: "No delivery charge" }],
//   },
//   {
//     type: "resutaurant",
//     card: [
//       {
//         name: "Burger King",
//         image: "https://i1.sndcdn.com/avatars-000650483382-yeyh9z-t500x500.jpg",
//         cusines: ["Burger", "American"],
//         rating: "4.2",
//       },
//       {
//         name: "KFC",
//         image: "https://i1.sndcdn.com/avatars-000650483382-yeyh9z-t500x500.jpg",
//         cusines: ["Burger", "American"],
//         rating: "4.2",
//       },
//     ],
//   },
// ];


// const Body = () => {
//   return (
//     <div className="resturant-list">
//       {resturantList.map((restaurant) => {
//         return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
//       })}
//     </div>
//   );
// };
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
