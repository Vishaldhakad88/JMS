import React from 'react';

export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">Overview Card 1</div>
        <div className="bg-white rounded-lg shadow p-4">Overview Card 2</div>
        <div className="bg-white rounded-lg shadow p-4">Overview Card 3</div>
      </div>
    </div>
  );
}
