import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const default_options: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
  },
  colors: ["#FFA70B", "#219653", "#333A48", "#0FADCF", "#3C50E0", "#6577F3"],
  labels: [/** generated from input */],
  legend: {
    show: false,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

interface LegendLabel {
  label: string;
  value: string;
}

const CustomerPieChart: React.FC = ({labels, series} : {labels: string[], series: number[]}) => {
  const [options, setOptions] = useState<ApexOptions>(default_options);

  // save perf on rendering labels once if ApexChart framework allows
  useEffect(() => {
    const optionsClone = {...options};
    optionsClone.labels = labels;
    setOptions(optionsClone);
  }, [labels]);

  const getTopN = (arr: number[], n = 10) => {
    const _arr = arr.map((value, index) => [value, index]);
    // by using b[0] - a[0] instead of a[0] - b[0] we can get the array in non-increasing order
    _arr.sort((a, b) => b[0] - a[0]) 
    return _arr.slice(0, n).map(([_, index]) => index);
  }

  const defaultLegend : LegendLabel[] = [];
  defaultLegend.fill({label: '', value: ''}, 0, 3);
  const [legendMap, setLegendMap] = useState<LegendLabel[]>(defaultLegend);

  useEffect(() => {
    if (series.length == 0)
      return;

    const topIndexes = getTopN(series, 3);
    const totalSeries = series.reduce((prev, curr) => curr + prev);
    const totalTopIndex = series.filter((_, index) => topIndexes.includes(index)).reduce((prev, curr) => prev+curr);
  
    const _legendMap = topIndexes.map<LegendLabel>(x => ({
      label: labels[x],
      value: Math.round(series[topIndexes[0]] / totalSeries * 100) + "%",
    }));
    _legendMap.push({
      label: 'others',
      value: Math.floor(100 - totalTopIndex/totalSeries * 100) + "%"
    })
    setLegendMap(_legendMap);
  }, [series]);

  // if (legendMap.length == 0) {
  if (true) {
    return (
      <>
        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg className="w-10 h-10 text-gray-200 dark:text-bodydark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
            </svg>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-boxdark w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-boxdark mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-boxdark mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-boxdark"></div>
        <div className="flex items-center mt-4">
          <svg className="w-10 h-10 me-3 text-gray-200 dark:text-bodydark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-boxdark w-32 mb-2"></div>
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-boxdark"></div>
            </div>
        </div>
        <span className="sr-only">Loading...</span>
      </>
    );
  }
  
  return (
    <>
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Customer Analytics
          </h5>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select
              name=""
              id=""
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="" className="dark:bg-boxdark">
                Monthly
              </option>
              <option value="" className="dark:bg-boxdark">
                Yearly
              </option>
            </select>
            <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                  fill="#637381"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                  fill="#637381"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-warning"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> {legendMap[0].label} </span>
              <span> {legendMap[0].value} </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-success"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> {legendMap[1].label} </span>
              <span> {legendMap[1].value} </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-graydark"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> {legendMap[2].label} </span>
              <span> {legendMap[2].value} </span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> {legendMap[3].label} </span>
              <span> {legendMap[3].label} </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerPieChart;
