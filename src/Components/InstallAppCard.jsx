import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
const InstallAppCard = ({ app, handleRemoveApp }) => {
  return (
    <div className="md:flex justify-between  rounded-xl shadow-lg items-center  ">
      <div className="flex gap-10  my-5  p-5 items-center ">
        <img
          className="w-[30%] md:w-[10%] bg-[#D9D9D9] p-2 rounded-xl"
          src={app.image}
          alt=""
        />
        <div>
          <h1 className="text-xl font-semibold mb-5">{app.title}</h1>
          <div className="flex space-x-5">
            <div className="font-semibold text-[#00D390]  flex items-center gap-1">
              {" "}
              <MdOutlineFileDownload />
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                app.downloads,
              )}
            </div>
            <div className="font-semibold text-[#FF8811] flex items-center gap-1">
              <FaStar />
              {app.ratingAvg}
            </div>
            <p className="font-semibold text-zinc-500">{app.size} MB</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => handleRemoveApp(app.id)}
          className="btn btn-active btn-success text-white md:mr-7 mb-3"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallAppCard;
