import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4200/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
        enqueueSnackbar('Book fetched successfully', { variant: 'success' });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        enqueueSnackbar('Error while fetching book', { variant: 'error' });
      });
  }, []);

  const navigate = useNavigate();

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:4200/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book saved successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        enqueueSnackbar('Error while saving book', { variant: 'error' });
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 font-semibold text-gray-800">Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border border-sky-400 rounded-xl max-w-md mx-auto p-4">
        <div className="my-4">
          <label className="text-xl font-semibold text-gray-700" key="title-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-sky-500"
            key="title-input"
          />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold text-gray-700" key="author-label">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-sky-500"
            key="author-input"
          />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold text-gray-700" key="publishYear-label">
            Publish Year
          </label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-sky-500"
            key="publishYear-input"
          />
        </div>
        <button
          className="bg-sky-500 text-white hover:bg-sky-600 rounded-full py-2 px-4 mt-4 self-center"
          onClick={handleEditBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
