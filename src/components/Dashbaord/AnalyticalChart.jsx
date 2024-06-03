import React from "react";
import { GoDotFill } from "react-icons/go";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Users",
    uv: 590,
    pv: 800,
    amt: 902,
    cnt: 490,
  },
  {
    name: "Revenue",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Workout Plans Sold",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Meal Plans Sold",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
];

const AnalyticalChart = () => {
  return (
    <div className="w-full flex flex-col gap-6 items-start p-0 md:p-6 bg-white rounded-xl">
      <div className="w-full flex flex-col lg:flex-row lg:items-center items-start justify-between p-4 md:p-0">
        <h2 className="text-lg font-semibold">Reports</h2>
        <div className="flex items-center justify-end flex-wrap gap-4">
          <div className="flex items-center gap-1 border rounded-lg px-3 py-1.5">
            <GoDotFill className="text-xs text-blue-500" />
            <span className="text-[11px] font-medium text-gray-500">Users</span>
          </div>
          <div className="flex items-center gap-1 border rounded-lg px-3 py-1.5">
            <GoDotFill className="text-xs text-black" />
            <span className="text-[11px] font-medium text-gray-500">Revenue</span>
          </div>
          <div className="flex items-center gap-1 border rounded-lg px-3 py-1.5">
            <GoDotFill className="text-xs text-yellow-500" />
            <span className="text-[11px] font-medium text-gray-500">
              Workout Plans
            </span>
          </div>
          <div className="flex items-center gap-1 border rounded-lg px-3 py-1.5">
            <GoDotFill className="text-xs text-green-500" />
            <span className="text-[11px] font-medium text-gray-500">
              Meal Plans
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[30vh] md:h-[50vh] mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={'100%'}
            height={'100%'}
            data={data}
            margin={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            {/* <CartesianGrid stroke="#f5f5f5" /> */}
            <XAxis dataKey="name" scale="band" className="text-[10px]" />
            <YAxis className="text-[10px]" />
            {/* <Tooltip /> */}
            {/* <Legend /> */}
            <Area
              type="monotone"
              dataKey="amt"
              fill="#64B5AC"
              stroke="#8884d8"
              className="opacity-30"
            />
            <Bar dataKey="pv" barSize={30} fill="#64B5AC" className="" />
            <Line type="monotone" dataKey="uv" stroke="#64B5AC" />
            <Scatter dataKey="cnt" fill="#0bd4ba" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticalChart;
