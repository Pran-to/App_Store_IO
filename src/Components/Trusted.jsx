import React from "react";

const Trusted = () => {
  return (
    <div className="text-center bg-linear-to-r from-[#6b36e5] to-[#995cf0] text-white space-y-5 p-5 ">
      <h1 className="text-3xl font-bold">Trusted by Millions, Built for You</h1>
      <div className="flex justify-center gap-7">
        <div>
          <p>Total Downloads</p>
          <h1 className="text-2xl font-bold">29.6M</h1>
          <p>21% more than last month</p>
        </div>
        <div>
          <p>Total Reviews</p>
          <h1  className="text-2xl font-bold">906K</h1>
          <p>46% more than last month</p>
        </div>
        <div>
          <p>Active Apps</p>
          <h1  className="text-2xl font-bold">132+</h1>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
