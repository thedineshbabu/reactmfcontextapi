import React from "react";

const Header = ({ count, clear }) => {
  return (
    <div className="bg-red-400 text-3xl p-2 container w-full">
      <h1>Awesome Header</h1>
      <p>{count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={clear}
      >
        Clear
      </button>
    </div>
  );
};

export default Header;
