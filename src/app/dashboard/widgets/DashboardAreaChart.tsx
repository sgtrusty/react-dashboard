import CustomerAreaChart from "@/components/Charts/CustomerAreaChart";
import { CustomerStatus } from "@/types/customer";
import { useEffect, useState } from "react";

interface IAreaData {
    created: Date;
    status: CustomerStatus;
}

function calculateMonthsFromLowest(lowestDate: Date, totalEntries: number, customerData: IAreaData[]) : [number[], number[]] {
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

  return [
    totalSeries,
    approvedSeries
  ];
}

export default function DashboardAreaChart({data} : {data: IAreaData[]}) {
  const [fromDate, setFromDate] = useState<Date>(new Date());  
  const [toDate, setToDate] = useState<Date>(new Date());
  const [totalSeries, setTotalSeries] = useState<number[]>([]);
  const [approvedSeries, setApprovedSeries] = useState<number[]>([]);

  useEffect(() => {
    console.log(data);
    const _fromDate = data.reduce((prevData, currData) => currData.created < prevData.created ? currData : prevData).created;
    const _toDate = new Date();
    
    setFromDate(_fromDate);
    setToDate(_toDate);

    const monthsDifference = (_toDate.getFullYear() - _fromDate.getFullYear()) * 12 + (_toDate.getMonth() - _fromDate.getMonth());
    const [total, approved] = calculateMonthsFromLowest(_fromDate, monthsDifference, data);
    setTotalSeries(total);
    setApprovedSeries(approved);
  }, []);

  return (
      <CustomerAreaChart fromDate={fromDate} toDate={toDate} approvedSeries={approvedSeries} totalSeries={totalSeries}/>
  );
}