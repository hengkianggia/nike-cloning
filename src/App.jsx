import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import List from "./component/Product/List";
import ListProduct from "./component/Product/ListProduct";
import ListProduct2 from "./component/Product/ListProduct2";
import ListProduct4 from "./component/Product/ListProduct4";
import WrapList3 from "./component/Product/WrapList3";
import Home from "./Route/Root";
import Root from "./Route/Root";

const store = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ListProduct />
      <ListProduct2 />
      <Header />
      <WrapList3/>
      <ListProduct4/>
      <List/>
      <Footer/>
    </>
  );
}

export default App;
