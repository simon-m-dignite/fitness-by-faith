import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Sep',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Oct',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Nov',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const RevenueChart = () => {
  return (
    <div className='w-full bg-white rounded-xl p-6 lg:h-[60vh]'>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={'100%'}
          height={'100%'}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="2 2"/>
          <XAxis dataKey="name" className='text-[10px]'/>
          <YAxis className='text-[10px]'/>
          {/* <Tooltip /> */}
          <Area type="monotone" dataKey="uv" stroke="#64B5AC" fill="#52c5b5" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueChart
