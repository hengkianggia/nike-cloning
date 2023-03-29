import React from "react";
import Header from "../component/Header";
import header from "../Data/Women/Data";
import Product2 from "../component/Product/Product2";
import Product1 from "../component/Product/Product1";
import Button from "../component/UI/Button";
import { produk, produkLarge } from "../Data/Women/Data";
import Grid from "../component/Grid";
import Product5 from "../component/Product/Product5";
import Banner from "../component/Banner";

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

const Women = () => {
  return (
    <>
      <Header
        kate={header.kate}
        title={header.title}
        desc={header.desc}
        className={"w-[100%]"}
        button={header.button}
      />

      <div className="w-full px-14 mt-20 space-y-5">
        <div>
          <h1 className="font-Helvetica text-[24px]"></h1>
        </div>

        <div className="w-full flex justify-between">
          <Product2 title={"Lock In With Go"} button={"Shop Legging's"} />
          <Product2 title={"Let Your Legs Exhale"} button={"Shop Legging's"} />
        </div>
      </div>

      <header className="w-full px-14 pt-16">
        <div>
          <h1 className="text-[24px] font-Helvetica">Running Shoe Finder</h1>
        </div>

        <div className="w-full flex flex-col items-center gap-y-10 mt-5">
          <div className="w-full bg-red-300 relative">
            <img
              src=""
              alt=""
              className="w-full h-[100vh] object-cover object-center"
            />
            <div className="absolute bottom-10 left-10">
              <h1 className="text-[20px] font-Helvetica text-white">
                Step Into What Fells Good
              </h1>
              <Button
                teks={"Find Your Shoe"}
                className={"bg-white text-black mt-5"}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="w-full px-14 mt-20 space-y-5">
        <div>
          <h1 className="font-Helvetica text-[24px]"></h1>
        </div>

        <div className="w-full flex justify-between">
          <Product2
            title={"Fist That Glow With The Flow"}
            button={"Shop Yoga"}
          />
          <Product2
            title={"Looks For Active Mamas"}
            button={"Shop Maternity"}
          />
        </div>
      </div>

      <div className="w-full px-14 mt-20 space-y-5">
        <div>
          <h1 className="font-Helvetica text-[24px]">Popular Right Now</h1>
        </div>

        <div className="w-full flex flex-wrap justify-between overflow-scroll gap-y-5">
          {produkList}
        </div>
      </div>

      <header className="w-full px-14 pt-16">
        <div>
          <h1 className="text-[24px] font-Helvetica"></h1>
        </div>

        <div className="w-full flex flex-col items-center gap-y-10 mt-5">
          <div className="w-full bg-red-300 relative">
            <img
              src=""
              alt=""
              className="w-full h-[100vh] object-cover object-center"
            />
          </div>
          <div className="flex gap-x-5">
            <Button teks={"Explore NTC"} className={'text-white'}/>
            <Button teks={"Explore NRC"} className={'text-white'}/>
          </div>
        </div>
      </header>

      <Grid
        title1={"Get More Out Of Your Run"}
        button1={"Start The Playlist"}
        title2={"Fells-Good Flow"}
        button2={"Start Workout"}
        title3={"Quick Core Crush"}
        button3={"Start Workout"}
        title4={"Run With Our Coaches"}
        button4={"See Guides Runs"}
      />

      <div className="w-full px-14 mt-20">
        <div className="flex justify-between items-center font-Helvetica">
          <h1 className="text-[24px] ">Icons for Any Season</h1>
        </div>

        <div className="w-full flex flex-wrap justify-between mt-5 gap-y-8">
          {produkLargeList}
        </div>
      </div>

      <Banner
        title={"BECOME A MEMBER"}
        desc={"Sign up for free. Join the comunity"}
        button={"Join Us"}
      />
    </>
  );
};

export default Women;
