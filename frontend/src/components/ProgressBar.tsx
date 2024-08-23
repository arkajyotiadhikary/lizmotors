import React from 'react';
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

interface ProgressBarProps {
  progress: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total }) => {
  const percentage = (progress / total) * 100;
  return (
    <div className="flex itmes-center bg-dark">
      <div className="w-12 h-12 rounded-full border-4 border-blue-500 relative">
        <CircularProgress value={40} color='green.400'>
          <CircularProgressLabel>{Math.round(percentage)}%</CircularProgressLabel>
        </CircularProgress>
      </div>
      <span className={'ml-2'}>{progress}/{total} completed</span>
    </div>
  )
}

export default ProgressBar;
