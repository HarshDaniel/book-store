import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBookOpen } from 'react-icons/fa'; // Corrected the icon import
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
      <div
        onClick={(event) => event.stopPropagation()}
        className='max-w-md w-full mx-4 p-4 bg-white rounded-xl relative'
      >
        <AiOutlineClose
          className='absolute top-4 right-4 text-2xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='px-4 py-2 bg-red-500 text-white rounded-lg'>{book.publishYear}</h2>
        <h4 className='my-2 text-gray-500'>{book._id}</h4>
        <div className='flex items-center gap-2'>
          <FaBookOpen className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex items-center gap-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.author}</h2>
        </div>
        <p className='mt-4'>Anything You Want to Show</p>
        <p className='my-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BookModal;
