"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CustomerTable from "@/components/Tables/CustomerTable";
import { CustomerSeedData as customerData } from "@/types/customer";
import DashboardAreaChart from "./widgets/DashboardAreaChart";
import DashboardPieChart from "./widgets/DashboardPieChart";

export default function DashboardView() {
  
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb longName="KYC Application Reports" pageName="Reports" />

        <div className="mt-2 mb-2 grid grid-cols-12 gap-2 md:mt-4 md:gap-6 2xl:mt-5 2xl:gap-4">
          <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
            <DashboardAreaChart data={customerData} />
          </div>
          <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-4">
            <DashboardPieChart data={customerData} />
          </div>
        </div>
        
        <CustomerTable data={customerData}/>
      </div>
    </>
  );
}
