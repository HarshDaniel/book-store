import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:4200/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        enqueueSnackbar('Error while deleting book', { variant: 'error' });
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 font-semibold text-gray-800">Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col items-center border border-sky-400 rounded-xl max-w-md mx-auto p-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
          Are you sure you want to delete this book?
        </h3>
        <button
          className="bg-red-600 text-white hover:bg-red-700 rounded-full py-2 px-4 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
