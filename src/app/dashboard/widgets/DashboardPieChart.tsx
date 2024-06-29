import CustomerPieChart from "@/components/Charts/CustomerPieChart";
import { CustomerStatus } from "@/types/customer";
import { useEffect, useState } from "react";

const statusLabels: string[] = Object.keys(CustomerStatus).filter(x => isNaN(parseInt(x)));

interface IPieData {
    status: CustomerStatus;
}

function calculateSeries(data: IPieData[]) : number[] {
  const series: number[] = Array.from({ length: statusLabels.length }, () => 0);
  for (let load of data) {
    series[load.status]!++;
  }
  return series;
}

export default function DashboardPieChart({data} : {data: IPieData[]}) {
  const [series, setSeries] = useState<number[]>([]);

  useEffect(() => {
    setSeries(calculateSeries(data));
  }, [data])

  return (
    <CustomerPieChart labels={statusLabels} series={series}/>
  );
}