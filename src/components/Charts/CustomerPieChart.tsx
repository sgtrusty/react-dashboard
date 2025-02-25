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

type Props = {labels: string[], series: number[]};

const CustomerPieChart: React.FC<Props> = ({labels, series} : Props) => {
  const [options, setOptions] = useState<ApexOptions>(default_options);

  // save perf on rendering labels once if ApexChart framework allows
  useEffect(() => {
    const optionsClone = {...options};
    optionsClone.labels = labels;
    setOptions(optionsClone);
  }, [options, labels]);

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
  }, [series, labels]);

  if (legendMap.length == 0) {
    return (
      <>
        <div className="flex items-center justify-center h-64 mb-4 mb-12 rounded">
          <svg aria-hidden="true" className="w-64 h-64 text-gray-200 animate-spin dark:text-gray-500 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
        </div>
        <div className="flex items-center mt-4">
          <div className="flex-1 me-3 ">
              <div className="h-2.5 bg-gray-200 dark:bg-gray-500 rounded-full dark:bg-boxdark flex-1 mb-2"></div>
              <div className="h-2.5 bg-gray-200 dark:bg-gray-500 rounded-full dark:bg-boxdark flex-1 mb-2"></div>
          </div>
          <div className="flex-1 me-3 ">
              <div className="h-2.5 bg-gray-200 dark:bg-gray-500 rounded-full dark:bg-boxdark flex-1 mb-2"></div>
              <div className="h-2.5 bg-gray-200 dark:bg-gray-500 rounded-full dark:bg-boxdark flex-1 mb-2"></div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <div className="flex-1 me-3 ">
              <div className="h-2.5 bg-gray-200 dark:bg-gray-500 rounded-full dark:bg-boxdark flex-1 mb-2"></div>
              <div className="h-2.5 bg-gray-200 dark:bg-gray-500 rounded-full dark:bg-boxdark flex-1 mb-2"></div>
          </div>
          <div className="flex-1 me-3 ">
              <div className="h-2.5 bg-gray-200 dark:bg-gray-500 rounded-full dark:bg-boxdark flex-1 mb-2"></div>
              <div className="h-2.5 bg-gray-200 dark:bg-gray-500 rounded-full dark:bg-boxdark flex-1 mb-2"></div>
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
              <span> {legendMap[3].value} </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerPieChart;
