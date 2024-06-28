import CustomerPieChart from "@/components/Charts/CustomerPieChart";
import { CustomerStatus } from "@/types/customer";

const statusKeys: string[] = [];
for (let val of Object.keys(CustomerStatus) ) {
  if ( isNaN( parseInt( val )) ) {
    statusKeys[statusKeys.length] = val;
  }
 }

interface IPieData {
    status: CustomerStatus;
}

function calculateSeries(data: IPieData[]) : number[] {
  const series: number[] = Array.from({ length: statusKeys.length }, () => 0);
  for (let load of data) {
    console.log(CustomerStatus[load.status], load.status);
    series[load.status]!++;
  }
  return series;
}

export default function DashboardPieChart({data} : {data: IPieData[]}) {
    const labels = statusKeys;
    const series = calculateSeries(data);

    console.log(labels, series);
  
    return (
      <CustomerPieChart labels={labels} series={series}/>
    );
}