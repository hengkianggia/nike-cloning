import React from "react";
import Grid from "../component/Grid";
import Grid2 from "../component/Grid2";
import Header from "../component/Header";
import Product1 from "../component/Product/Product1";
import Product2 from "../component/Product/Product2";
import List from '../component/Product/List'
import header from "../Data/Kids/Data";
import { produk, produk2 } from "../Data/Kids/Data";

const produkList = produk.map((item) => {
  return (
    <Product1
      key={item.id}
      title={item.title}
      cate={item.cate}
      price={item.price}
    />
  );
});

const produkList2 = produk2.map((item) => {
  return (
    <Product1
      key={item.id}
      title={item.title}
      cate={item.cate}
      price={item.price}
    />
  );
});

const Kids = () => {
  return (
    <>
      <Header
        p={header.p}
        kate={header.kate}
        title={header.title}
        desc={header.desc}
        className={"w-[100%]"}
        button={header.button}
      />

      <Grid
        title1={"Big Kids"}
        button1={"Start The Playlist"}
        p1={"Explore Apparel (XS-XL) and Shoes (3.5-7Y)"}
        title2={"Babies and Toddlers"}
        button2={"Shop"}
        p2={"Explore Apparel (0M-4T) and Shoes (0C-10C)"}
        title3={"Litle Kids"}
        button3={"Shop"}
        p3={"Explore Apparel (4-7) and Shoes (10.5C-3Y)"}
        title4={"Extended Size"}
        button4={"Shop"}
        p4={"Explore Apparel (S+-XL+)"}
      />

      <div className="w-full px-14 mt-20 space-y-5">
        <div>
          <h1 className="font-Helvetica text-[24px]">
            By Our Artist-in-Residence
          </h1>
        </div>

        <div className="w-full flex flex-wrap justify-between overflow-scroll gap-y-5">
          {produkList}
        </div>
      </div>

      <div className="w-full px-14 mt-20 space-y-5">
        <div>
          <h1 className="font-Helvetica text-[24px]">Featured</h1>
        </div>

        <div className="w-full flex justify-between">
          <Product2
            title={"Go Bold Or Go Home with a Dodle-inspired Print"}
            button={"Shop"}
          />
          <Product2
            title={"Matching Fits For The Whole Fam"}
            button={"Shop "}
          />
        </div>
      </div>

      <div className="w-full px-14 mt-20 space-y-5">
        <div>
          <h1 className="font-Helvetica text-[24px]">Matching Fits</h1>
        </div>

        <div className="w-full flex flex-wrap justify-between overflow-scroll gap-y-5">
          {produkList2}
        </div>
      </div>

      <Grid2
        kate={"Sizes for All"}
        title1={"Older Kids"}
        button1={"Shop"}
        title2={"Babies & Toddlers"}
        button2={"Shop"}
        title3={"Younger Kids"}
        button3={"Shop"}
      />

      <List />
    </>
  );
};

export default Kids;
