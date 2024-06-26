import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResturantDetail from "./components/ResturantDetails";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Vakil Singh"
    }
    setUserName(data.name)
  }, [])
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInuser: userName, setUserName }}>
        <React.Fragment>
          <UserContext.Provider value={{ loggedInuser: 'Elon Musk' }}>
            <Header />
          </UserContext.Provider>
          <Outlet />
          <Footer />
        </React.Fragment>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          { path: "profile", element: <Profile /> }, //dont use /profile here always outlet we need to fix inside parent component
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path: "/resturant/:id",
        element: <ResturantDetail />,
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
