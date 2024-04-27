"use client"

import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sun',
    uv: 3500,
  },
  {
    name: 'Mon',
    uv: 3000,
  },
  {
    name: 'Tue',
    uv: 2000,
  },
  {
    name: 'Wed',
    uv: 2780,
  },
  {
    name: 'Thu',
    uv: 1890,
  },
  {
    name: 'Fri',
    uv: 2390,
  },
  {
    name: 'Sat',
    uv: 3490,
  },
];

export default class SpentTimeGraph extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#f00" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
