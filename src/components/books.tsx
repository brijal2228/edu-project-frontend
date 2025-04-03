import React from "react";
import '../App.css';

type Book = {
  id: number;
  title: string;
  author: string;
  price: string;
};

const Books: React.FC = () => {
  const books: Book[] = [
    { id: 1, title: "Introduction to Algorithms", author: "Thomas H. Cormen", price: "$50" },
    { id: 2, title: "The Art of Computer Programming", author: "Donald Knuth", price: "$60" },
    { id: 3, title: "Clean Code", author: "Robert C. Martin", price: "$40" },
    { id: 4, title: "Design Patterns", author: "Erich Gamma", price: "$45" },
    { id: 5, title: "The Pragmatic Programmer", author: "Andrew Hunt", price: "$55" },
    { id: 6, title: "Refactoring", author: "Martin Fowler", price: "$50" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Books Marketplace</h1>
      <p>Browse and list used academic books here.</p>
      {/* Grid Container for Responsive Design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="border rounded-lg shadow p-4 flex flex-col">
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-green-500 font-bold">Price: {book.price}</p>
            <button className="mt-2 bg-primary text-white py-2 px-4 rounded hover:bg-dark">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
