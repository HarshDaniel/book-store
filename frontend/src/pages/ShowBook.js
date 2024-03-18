import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4200/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="px-4">
      <BackButton />
      <h1 className="text-3xl my-4 font-semibold text-gray-800">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-white shadow-lg rounded-xl p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Title:</h2>
              <p className="text-lg">{book.title}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Author:</h2>
              <p className="text-lg">{book.author}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Publish Year:</h2>
              <p className="text-lg">{book.publishYear}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">ID:</h2>
              <p className="text-lg">{book._id}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Create Time:</h2>
              <p className="text-lg">{new Date(book.createdAt).toLocaleString()}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Updated At:</h2>
              <p className="text-lg">{new Date(book.updatedAt).toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
