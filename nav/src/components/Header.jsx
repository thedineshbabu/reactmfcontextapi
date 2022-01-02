import React from "react";

const Header = ({ count, clear }) => {
  return (
    <header className="flex items-center justify-between flex-wrap bg-green-500 p-6">
      <div className="flex-grow">Awesome Header</div>
      <p>{count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={clear}
      >
        Clear
      </button>
    </header>
  );
};

export default Header;
