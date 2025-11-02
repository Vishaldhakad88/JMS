import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-8">
      <div className="max-w-7xl mx-auto p-6 text-sm text-gray-500">
        © {new Date().getFullYear()} JMS Store. All rights reserved.
      </div>
    </footer>
  );
}
