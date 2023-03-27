import React from 'react'
import Header from "../component/Header";
import List from "../component/Product/List";
import ListProduct from "../component/Product/ListProduct";
import ListProduct2 from "../component/Product/ListProduct2";
import ListProduct4 from "../component/Product/ListProduct4";
import WrapList3 from "../component/Product/WrapList3";

const Women = () => {
  return (
    <>
      <Header />
      <ListProduct />
      <ListProduct2 />
      <Header />
      <WrapList3 />
      <ListProduct4 />
      <List />
    </>
  );
}

export default Women