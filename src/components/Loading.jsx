import React from 'react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-40 p-6">
      <div className="animate-spin block rounded-full h-10 w-10 border-t-4 border-blue-500 mb-4">
      </div> <br />
      <span className="ml-3 text-blue-600 font-semibold">Loading Quiz...</span>
    </div>
  );
}
