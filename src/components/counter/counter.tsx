import React, { useState } from "react";

const Counter = () => {
    const [counter,setcounter]=useState(0);
  return (
    <div>
      <label data-testid="custom-element" >This is counter app</label>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setcounter(counter + 1)}>
        Increment
      </button>
      <button id="decrement-btn" onClick={() => setcounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
};
export default Counter;