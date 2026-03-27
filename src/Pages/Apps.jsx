import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const appData = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredApps = appData.filter((app) => {
    const name = app.name || app.title || "";
    return name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold mt-10">Our All Applications</h1>
      <p  className="text-xs my-5">Explore All Apps on the Market developed by us. We code for Millions</p>

      <div className="md:flex justify-between">
        <h1>({filteredApps.length}) Apps Found</h1>

        <input
          type="search"
          placeholder="Search Apps"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-1"
        />
      </div>

      <div className="grid md:grid-cols-4 gap-5 my-5">
        {filteredApps.length > 0 ? (
          filteredApps.map((app, i) => (
            <AppCard key={i} app={app} />
          ))
        ) : (
          <p>No apps found</p>
        )}
      </div>
    </div>
  );
};

export default Apps;