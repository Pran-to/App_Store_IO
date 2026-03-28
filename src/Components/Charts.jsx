import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Charts = ({ app }) => {
  return (
 <div className="w-full h-64 sm:h-80 md:h-96 ">
   <h1 className="text-xl font-bold ml-21 mb-5">Ratings</h1>
  <ResponsiveContainer width="80%" height="80%" className={'pl-12'}>
    <BarChart
      data={app.ratings}
      layout="vertical"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis type="category" dataKey="name" width={80} />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#FF8811" />
    </BarChart>
  </ResponsiveContainer>
</div>
  );
};

export default Charts;
