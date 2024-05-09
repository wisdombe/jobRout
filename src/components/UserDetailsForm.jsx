import React from "react";

const UserDetailsForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Enter Your Details:</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block mb-2">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </label>
          <label htmlFor="email" className="block mb-2">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </label>
          <label htmlFor="phone" className="block mb-4">
            Phone Number:
            <input
              type="text"
              id="phone"
              name="phone"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Submit
          </button>
        </form>
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserDetailsForm;
