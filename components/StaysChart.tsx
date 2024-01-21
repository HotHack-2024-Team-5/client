"use client";

import { useStaysData } from "@/api";
import React, { useEffect, useState } from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
} from "recharts";

// ... (previous imports)

export default function StaysChart(props: {
  cityIds: string[];
  dateFrom: string;
  dateTo: string;
}) {
  const staysData = useStaysData(props.cityIds, props.dateFrom, props.dateTo);

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
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="king" stackId="1" fill="#52796F" />
          <Bar dataKey="twin" stackId="1" fill="#84A98C" />
          <Bar dataKey="suite" stackId="1" fill="#CAD2C5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

//<Line type="monotone" dataKey="king" stroke="#8884d8" activeDot={{ r: 8 }} />
// <Bar dataKey="king" label={{ fill: 'red', fontSize: 20 }} />
