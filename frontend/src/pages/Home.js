import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BookTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table"); // Fixed typo in variable name

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4200/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4 mb-6">
        {/* Use arrow functions to correctly set showType */}
        <button
          className={`${
            showType === "table"
              ? "bg-sky-600 text-white"
              : "bg-sky-300 text-sky-800"
          } hover:bg-sky-700 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out`}
          onClick={() => setShowType("table")}
        >
          Table View
        </button>
        <button
          className={`${
            showType === "card"
              ? "bg-sky-600 text-white"
              : "bg-sky-300 text-sky-800"
          } hover:bg-sky-700 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out`}
          onClick={() => setShowType("card")}
        >
          Card View
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold text-gray-800">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
