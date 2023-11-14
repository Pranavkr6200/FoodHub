import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import ResCard from "./component/ResCard";
const App = () => {
  return (
    <div id="App" className="bg-slate-500 w-full pb-[20px]">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
