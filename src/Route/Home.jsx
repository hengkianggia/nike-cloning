import React from "react";
import Header from "../component/Header";
import List from "../component/Product/List";
import WrapList3 from "../component/Product/WrapList3";
import Product1 from "../component/Product/Product1";
import Product2 from "../component/Product/Product2";
import Product3 from "../component/Product/Product3";
import Product4 from "../component/Product/Product4";
import header from "../Data/Home/Data";
import { produk, header2 } from "../Data/Home/Data";

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

const Home = () => {
  return (
    <>
      <Header
        p={header.p}
        title={header.title}
        desc={header.desc}
        className={"w-[80%]"}
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
          <h1 className="font-Helvetica text-[24px]">The Latest</h1>
        </div>

        <div className="w-full flex justify-between">
          <Product2
            p={"Early Access"}
            title={"Heritage-Inspired Kick"}
            button={"Get It Foirst"}
          />
          <Product2
            p={"All day essentials"}
            title={"Ready For Anything"}
            button={"shop the look"}
          />
        </div>
      </div>

      <Header
        p={header2.p}
        title={header2.title}
        desc={header2.desc}
        kate={header2.kate}
        className={"w-[190%]"}
        button={header2.button}
      />

      <div className="w-full mt-20 px-14">
        <div>
          <h1 className="text-[24px] font-Helvetica">Gear Up</h1>
        </div>
        <div className="w-full flex justify-between mt-5">
          <div className="w-[49%] flex flex-col">
            <div className="font-Helvetica self-end text-[18px]">
              <p>Shop Men's</p>
            </div>

            <div className="w-full flex justify-between mt-5">
              <Product3 />
              <Product3 />
            </div>
          </div>

          <div className="w-[49%] flex flex-col">
            <div className="font-Helvetica self-end text-[18px]">
              <p>Shop Women's</p>
            </div>

            <div className="w-full flex justify-between mt-5">
              <Product3 />
              <Product3 />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-14 mt-20">
        <div className="flex justify-between items-center font-Helvetica">
          <h1 className="text-[24px] ">The Essentials</h1>
        </div>

        <div className="w-full flex justify-between mt-5">
          <Product4 title={"Mens"} />
          <Product4 title={"Women"} />
          <Product4 title={"Kids"} />
        </div>
      </div>
      <List />
    </>
  );
};

export default Home;
