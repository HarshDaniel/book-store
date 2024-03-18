import React, { useState } from 'react';
import { BiBookOpen } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md'; // Corrected the icon import
import { Link } from 'react-router-dom';
import BookModal from './BookModal';
import { BiShow } from 'react-icons/bi';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border-2 border-gray-300 rounded-lg shadow-md p-4 m-4 relative hover:shadow-xl' key={book._id}>
      <h2 className='absolute top-2 right-2 px-2 bg-red-500 text-white rounded-lg'>{book.publishYear}</h2>
      <h4 className='my-2 text-gray-500'>{book._id}</h4>
      <div className='flex items-center gap-x-2'>
        <BiBookOpen className='text-red-500 text-2xl' />
        <h2 className='my-1'>{book.title}</h2>
      </div>
      <div className='flex items-center gap-x-2'>
        <BiUserCircle className="text-red-500 text-2xl" />
        <h2 className='my-1'>{book.author}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-4'>
        <BiShow className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-2xl text-blue-800 hover:text-black' />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdDelete className='text-2xl text-red-800 hover:text-black' />
        </Link>
      </div>
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default BookSingleCard;
