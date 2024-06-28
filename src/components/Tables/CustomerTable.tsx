import Image from "next/image";
import {
  EyeIcon,
  TrashIcon,
  ArrowDownTrayIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/solid";

import { CustomerData, CustomerTypes } from "@/types/customer";

import CustomerRiskField from "./Fields/CustomerRiskField";
import DateField from "./Fields/DateField";
import CustomerStatusField from "./Fields/CustomerStatusField";

const CustomerTable = ({data} : {data: CustomerData[]}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Created
              </th>
              <th className="min-w-[40px] px-4 py-4"></th>
              <th className="min-w-[200px] px-4 py-4 font-medium text-black dark:text-white">
                Name
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Type
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Risk score
              </th>
              <th className="min-w-[180px] px-4 py-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((customerData, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <DateField date={customerData.created} />
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  {!!customerData.avatar ? 
                  <Image
                    src={"/images/user/" + customerData.avatar}
                    width={60}
                    height={50}
                    alt="user photo"
                  /> : <></>}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-lg text-black dark:text-white">
                    {customerData.name}
                  </p>
                  <p className="text-sm -m-2 p-2 text-gray-500 blur-sm hover:blur-none ">
                    {customerData.email}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {CustomerTypes[customerData.type]}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <CustomerRiskField riskScore={customerData.riskScore} />
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <CustomerStatusField status={customerData.status} />
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    {customerData.hasMoreActions ? (
                      <button className="hover:text-primary">
                        <Bars3BottomLeftIcon className="text-black h-6 w-6 -ml-1" />
                      </button>
                    ) : (
                      <>
                        <button className="hover:text-primary">
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <button className="hover:text-primary">
                          <TrashIcon className="h-5 w-5" />
                        </button>
                        <button className="hover:text-primary">
                          <ArrowDownTrayIcon className="h-5 w-5" />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
