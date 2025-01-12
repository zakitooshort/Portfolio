import React from 'react';

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-white">{label}</span>
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