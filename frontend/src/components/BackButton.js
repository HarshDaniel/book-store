import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-800 hover:bg-sky-600 text-white px-4 py-2 rounded-lg w-fit transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <BsArrowLeft className="text-2xl" />
        <span className="ml-2">Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
