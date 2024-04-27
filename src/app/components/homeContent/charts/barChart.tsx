"use client"

import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    pv: 2400,
  },
  {
    name: 'Feb',
    pv: 1398,
  },
  {
    name: 'Mar',
    pv: 9800,
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
    pv: 4300,
  },
  {
    name: 'Aug',
    pv: 4300,
  },
  {
    name: 'Sep',
    pv: 4300,
  },
  {
    name: 'Oct',
    pv: 4300,
  },
  {
    name: 'Nov',
    pv: 4300,
  },
  {
    name: 'Dec',
    pv: 4300,
  },
];

export default class LargeBarChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          width={100}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={15}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis padding={{}} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
