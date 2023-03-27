import React from "react";
import Header from "../component/Header";
import List from "../component/Product/List";
import Product1 from "../component/Product/Product1";
import Product2 from "../component/Product/Product2";
import Product4 from "../component/Product/Product4";
import Product5 from "../component/Product/Product5";
import header from "../Data/Men/Data";
import { produk, header2, produkLarge } from "../Data/Men/Data";

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

const produkLargeList = produkLarge.map((item) => {
  return <Product5 key={item.id} title={item.title} />;
});

const Men = () => {
  return (
    <>
      <Header
        kate={header.kate}
        title={header.title}
        desc={header.desc}
        className={"w-[240%]"}
        button={header.button}
      />

      <div className="w-full px-14 mt-20 space-y-5">
        <div>
          <h1 className="font-Helvetica text-[24px]">Trending This Week</h1>
        </div>

        <div className="w-full flex flex-wrap justify-between overflow-scroll gap-y-5">
          {produkList}
        </div>
      </div>

      <div className="w-full px-14 mt-20 space-y-5">
        <div>
          <h1 className="font-Helvetica text-[24px]">Trending</h1>
        </div>

        <div className="w-full flex justify-between">
          <Product2 title={"Nike Pegasus 39"} button={"Shop"} />
          <Product2
            title={"ASW Preservation Pack: Never Done Celebrating Icons"}
            button={"Shop"}
          />
        </div>
      </div>

      <Header
        title={header2.title}
        desc={header2.desc}
        kate={header2.kate}
        className={"w-[190%]"}
        button={header2.button}
      />

      <div className="w-full px-14 mt-20">
        <div className="flex justify-between items-center font-Helvetica">
          <h1 className="text-[24px] ">Icons for Any Season</h1>
        </div>

        <div className="w-full flex flex-wrap justify-between mt-5 gap-y-8">
          {produkLargeList}
        </div>
      </div>

      <div className="w-full px-14 mt-20">
        <div className="flex justify-between items-center font-Helvetica">
          <h1 className="text-[24px] ">The Essentials</h1>
        </div>

        <div className="w-full flex justify-between mt-5">
          <Product4 title={"Tops and T-Shirt"} />
          <Product4 title={"Short"} />
          <Product4 title={"Pants and Legging's"} />
        </div>
      </div>

      <List />
    </>
  );
};

export default Men;
