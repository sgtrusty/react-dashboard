import CustomerPieChart from "@/components/Charts/CustomerPieChart";
import { CustomerStatus } from "@/types/customer";

const statusKeys: string[] = Object.keys(CustomerStatus).filter(x => isNaN(parseInt(x)));

interface IPieData {
    status: CustomerStatus;
}

function calculateSeries(data: IPieData[]) : number[] {
  const series: number[] = Array.from({ length: statusKeys.length }, () => 0);
  for (let load of data) {
    series[load.status]!++;
  }
  return series;
}

export default function DashboardPieChart({data} : {data: IPieData[]}) {
    const labels = statusKeys;
    const series = calculateSeries(data);

    return (
      <CustomerPieChart labels={labels} series={series}/>
    );
}