import React from 'react';

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="@[600px]:text-[10px] @[700px]:text-[13px] @[900px]:text-md @[1000px]:text-lg font-medium text-white">{label}</span>
        <span className="text-sm font-medium text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-[#3d3d3d] rounded-full h-4">
        <div
          className="bg-[#191919] h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;