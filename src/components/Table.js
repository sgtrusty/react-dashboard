import React from 'react';

export default function Table({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full ">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Created</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Risk Score</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{row.created}</td>
              <td className="py-2 px-4 border-b">{row.name}</td>
              <td className="py-2 px-4 border-b">{row.type}</td>
              <td className="py-2 px-4 border-b">{row.riskScore}</td>
              <td className="py-2 px-4 border-b">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};