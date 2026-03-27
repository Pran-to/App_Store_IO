import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const AppCard = ({ app }) => {
  return (
    <div className="card bg-base-100  shadow-lg">
      <figure>
        <img className=" w-40 p-3" src={app.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{app.title}</h2>
        <div className=" flex justify-between">
          <div className="font-semibold text-[#00D390] bg-[#F1F5E8] px-2 py-1 rounded flex items-center gap-1"> <MdOutlineFileDownload />
            {Intl.NumberFormat("en", { notation: "compact" }).format(
              app.downloads,
            )}
          </div>
          <div className="font-semibold text-[#FF8811] bg-[#FFF0E1] px-2 py-1 rounded flex items-center gap-1">
            <FaStar />
            {app.ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
