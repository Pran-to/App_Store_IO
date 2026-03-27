import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";

export default function AppDetails() {
  const data = useLoaderData();
  const { id } = useParams();

  const app = data.find((item) => item.id === parseInt(id));

  if (!app) {
    return <h2>App not found</h2>;
  }

  return (
    <div>
      <div className="md:flex gap-10 p-20">
        <img className="w-52" src={app.image} alt="" />
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">SmPlan:ToDo List with Reminder</h1>
          <p className="text-xs font-semibold text-gray-500">
            Developed by <span className="text-violet-500">productive.io</span>
          </p>
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
        </div>
      </div>
    </div>
  );
}
