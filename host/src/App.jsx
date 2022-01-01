import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "nav/Header";

import "./index.scss";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <Header count={count} clear={() => setCount(0)} />
      <p className="text-center">You clicked {count} times</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
