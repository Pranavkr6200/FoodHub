import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { useState } from "react";

const App = () => {
  const [val, setVal] = useState(0);

  function handleAddToCart(prevState) {
    setVal((prevState) => prevState + 1);
  }

  return (
    <div id="App" className="bg-slate-500 w-full pb-[20px]">
      <Header count={val} />
      <Body handleAddToCart={handleAddToCart} />
      {/* <CartItem /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
