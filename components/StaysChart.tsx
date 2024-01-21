'use client';

import { useStaysData } from '@/api';
import React, { useEffect, useState } from 'react';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart } from 'recharts';


export default function StaysChart(props: { cityIds: string[], dateFrom: string, dateTo: string, roomTypes: readonly { value: string }[]}) {

    const staysData = useStaysData(props.cityIds, props.dateFrom, props.dateTo);

    const showKing = props.roomTypes.find((roomType) => roomType.value === 'King') || props.roomTypes.length === 0;
    const showTwin = props.roomTypes.find((roomType) => roomType.value === 'Twin') || props.roomTypes.length === 0;
    const showSuite = props.roomTypes.find((roomType) => roomType.value === 'Suite') || props.roomTypes.length === 0;

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
          barCategoryGap={0}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis  allowDecimals={false}/>
          <Tooltip />
          <Legend />
          {showKing ? <Bar dataKey="king" stackId="1" fill="#DDA15E" /> : null}
          {showTwin ? <Bar dataKey="twin" stackId="1" fill="#CD822B" /> : null}
          {showSuite ? <Bar dataKey="suite" stackId="1" fill="#955E20" /> : null}
        </BarChart>
       </ResponsiveContainer>
       </div>
    );
  }

  //<Line type="monotone" dataKey="king" stroke="#8884d8" activeDot={{ r: 8 }} />
  // <Bar dataKey="king" label={{ fill: 'red', fontSize: 20 }} />
