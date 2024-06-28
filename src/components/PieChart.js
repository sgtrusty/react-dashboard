"use client";
import React, { useRef } from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

export default function PieChart({ labels, data, colors }) {
  const chartRef = useRef();
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
      },
    ],
  };

  console.log(chartData);

  return <Pie ref={chartRef} data={chartData} />;
};