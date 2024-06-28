"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartOne from "@/components/Charts/ChartOne";
import PieChart from "@/components/Charts/PieChart";
import CustomerTable from "@/components/Tables/CustomerTable";

export default function HomePageView() {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb longName="KYC Application Reports" pageName="Reports" />

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
            <ChartOne />
          </div>
          <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-4">
            <PieChart />
          </div>
        </div>
        
        <CustomerTable />
      </div>
    </>
  );
}
