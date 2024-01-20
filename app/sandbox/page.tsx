'use client';

import { useStaysData } from '@/api';
import React, { useEffect, useState } from 'react';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart } from 'recharts';

const demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

export default function Dashboard() {

    const staysData = useStaysData(['city1', 'city2', 'city3'],'2024-01-20','2024-01-21');


    return (
        <div style={{ height: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={staysData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis  allowDecimals={false}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="king" stackId="1" fill="#DDA15E" />
          <Bar dataKey="twin" stackId="1" fill="#CD822B" />
          <Bar dataKey="suite" stackId="1" fill="#955E20" />
        </BarChart>
       </ResponsiveContainer>
       </div>
    );
  }

  //<Line type="monotone" dataKey="king" stroke="#8884d8" activeDot={{ r: 8 }} />
  // <Bar dataKey="king" label={{ fill: 'red', fontSize: 20 }} />