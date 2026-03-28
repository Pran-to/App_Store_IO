import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import Charts from "../Components/Charts";


import React from 'react';

const Details = () => {
   const data = useLoaderData();
  const { id } = useParams();
  console.log(id);

  const app = data.find((item) => item.id === parseInt(id));
  return (
    <div>
      <div className="md:flex gap-10 px-20 py-10">
        <img className="w-52" src={app.image} alt="" />
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-xs font-semibold text-gray-500">
            Developed by <span className="text-violet-500">productive.io</span>
          </p>
          <div className="divider my-0"></div>
          <div className="flex gap-5">
            <div className="space-y-3">
              <MdOutlineFileDownload className="text-[#00D390] w-8 h-8 " />
              <p className="text-xs">Downloads</p>
              <h1 className="font-bold text-xl">
                {Intl.NumberFormat("en", { notation: "compact" }).format(
                  app.downloads,
                )}
              </h1>
            </div>
            <div className="space-y-3">
              <FaStar className=" text-[#FF8811] w-8 h-8 " />
              <p className="text-xs">Average Ratings</p>
              <h1 className="font-bold text-xl">{app.ratingAvg}</h1>
            </div>
            <div className="space-y-3">
              <AiFillLike className="text-violet-500 w-8  h-8" />
              <p className="text-xs">Total Reviews</p>
              <h1 className="font-bold text-xl">
                {Intl.NumberFormat("en", { notation: "compact" }).format(
                  app.reviews,
                )}
              </h1>
            </div>
          </div>
           <button className="btn btn-active btn-success text-white">Install Now ({app.size} MB)</button>
        </div>
      </div>
      <div className="divider px-20"></div>
      <div>
        <Charts key={app.id} app={app}></Charts>
      </div>
      <div className="divider px-20"></div>
      <div className="px-20 mb-7">
        <h1 className="text-2xl font-bold mb-7">Descriptions</h1>
        {
          app.description
        }
      </div>
    </div>
  );
};

export default Details;

