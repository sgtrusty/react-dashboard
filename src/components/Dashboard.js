import React from 'react';
import PieChart from './PieChart';
import Table from './Table';
import * as CDATA from '@/types/CustomerData.type';

export default function Dashboard() {
  const tableData = CDATA.CUSTOMER_SEEDDATA;

  const pieChartData = CDATA.CUSTOMER_DATA_STATUS.map(status => tableData.filter(data => data.status.toLowerCase() == status.toLocaleLowerCase()).length);

  return (
    <div className="container mx-auto p-4">
      <PieChart labels={CDATA.CUSTOMER_DATA_STATUS} colors={CDATA.CUSTOMER_DATA_COLORS} data={pieChartData} />
      <Table data={tableData} />
    </div>
  );
};