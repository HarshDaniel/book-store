import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BookTable = ({ books }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 shadow-sm overflow-hidden rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left">No</th>
          <th className="px-4 py-2 text-left">Title</th>
          <th className="px-4 py-2 text-left hidden md:table-cell">Author</th>
          <th className="px-4 py-2 text-left hidden md:table-cell">Publish Year</th>
          <th className="px-4 py-2 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {books.map((book, idx) => (
          <tr key={book._id}>
            <td className="px-4 py-2 text-left">{idx + 1}</td>
            <td className="px-4 py-2 text-left">{book.title}</td>
            <td className="px-4 py-2 text-left hidden md:table-cell">{book.author}</td>
            <td className="px-4 py-2 text-left hidden md:table-cell">{book.publishYear}</td>
            <td className="px-4 py-2 text-center">
              <div className="flex justify-center space-x-2">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-green-600 hover:text-green-800 cursor-pointer" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-yellow-600 hover:text-yellow-800 cursor-pointer" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-red-600 hover:text-red-800 cursor-pointer" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
