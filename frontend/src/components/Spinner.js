import React from 'react';

const Spinner = () => {
  return (
    <div className="w-16 h-16 m-8 relative">
      <div className="animate-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-t-4 border-r-4 border-b-4 border-sky-800 rounded-full border-opacity-40 h-12 w-12"></div>
    </div>
  );
};

export default Spinner;
