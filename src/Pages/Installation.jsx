import { use, useEffect, useState } from "react";
import { AppContext } from "./Root";
import { getApp, removeApp } from "../utility/LocalStorage";
import InstallAppCard from "../Components/InstallAppCard";
import { toast } from "react-toastify";

const Installation = () => {
  const [InstallApp, setInstallApp] = useState([]);
  const [sort, setSort] = useState("");
  const data = use(AppContext);
  useEffect(() => {
    const getData = getApp();
    const convertedData = getData.map((id) => parseInt(id));
    const appInstalled = data.filter((app) => convertedData.includes(app.id));
    setInstallApp([...appInstalled]);
  }, [data]);
  const handleRemoveApp = (id) => {
    removeApp(id);
    const remainingApps = InstallApp.filter((app) => app.id !== id);
    setInstallApp(remainingApps);
    toast.success('UnInstall Done')
  };
  const handleSort = (s) => {
    if (s === "LtoH") {
      setSort("LtoH");
      const lth = [...InstallApp].sort((a, b) => a.size - b.size);
      setInstallApp(lth);
    } else if (s === "HtoL") {
      setSort("HtoL");
      const lth = [...InstallApp].sort((a, b) => b.size - a.size);
      setInstallApp(lth);
    }
  };
  return (
    <div>
      <div className="text-center space-y-7 mt-10 px-7">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-xs text-zinc-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center px-10">
        <h1 className="text-xl font-bold">{InstallApp.length} Apps Found</h1>
        <div className="collapse bg-base-100 border-base-300 border w-fit  collapse-arrow ">
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-zinc-500">
            Sort By Size
          </div>
          <div className="collapse-content text-sm grid ">
            <button
              onClick={() => handleSort("LtoH")}
              className={`btn ${sort == "LtoH" ? "bg-emerald-500 text-white" : ""}`}
            >
              Low To High
            </button>
            <button
              onClick={() => handleSort("HtoL")}
              className={`btn ${sort == "HtoL" ? "bg-emerald-500 text-white" : ""}`}
            >
              High To Low
            </button>
          </div>
        </div>
      </div>

      <div className=" p-10 ">
        {InstallApp.map((app, i) => (
          <InstallAppCard
            app={app}
            key={i}
            handleRemoveApp={handleRemoveApp}
          ></InstallAppCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
