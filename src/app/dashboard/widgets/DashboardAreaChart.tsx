import CustomerAreaChart from "@/components/Charts/CustomerAreaChart";
import { CustomerStatus } from "@/types/customer";

interface IAreaData {
    created: Date;
    status: CustomerStatus;
}

function calculateMonthsFromLowest(lowestDate: Date, totalEntries: number, customerData: IAreaData[]) : {totalSeries: number[], approvedSeries: number[]} {
  // Extract year and month from lowestDate
  const lowestYear = lowestDate.getFullYear();
  const lowestMonth = lowestDate.getMonth();

  // Calculate months since lowestDate for each date in dateArray
  const approvedSeries: number[] = Array.from({ length: totalEntries + 1 }, () => 0);
  const totalSeries: number[] = Array.from({ length: totalEntries + 1 }, () => 0);

  customerData.forEach((data) => {
    const year = data.created.getFullYear();
    const month = data.created.getMonth();

    // Calculate months difference considering month progression
    const index = year * 12 + month - (lowestYear * 12 + lowestMonth);
    totalSeries[index] = totalSeries[index]+1;
    if (data.status == CustomerStatus.approved) {
      approvedSeries[index] = approvedSeries[index]+1;
    }
  });

  return {
    totalSeries: totalSeries,
    approvedSeries: approvedSeries,
  };
}

export default function DashboardAreaChart({data} : {data: IAreaData[]}) {
    const fromDate = data.reduce((prevData, currData) => currData.created < prevData.created ? currData : prevData).created;
    const toDate = new Date();
    const monthsDifference = (toDate.getFullYear() - fromDate.getFullYear()) * 12 + (toDate.getMonth() - fromDate.getMonth());
  
    const {totalSeries, approvedSeries} = calculateMonthsFromLowest(fromDate, monthsDifference, data);

    return (
        <CustomerAreaChart fromDate={fromDate} toDate={toDate} approvedSeries={approvedSeries} totalSeries={totalSeries}/>
    );
}