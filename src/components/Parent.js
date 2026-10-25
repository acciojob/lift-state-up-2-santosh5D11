import React, { useState } from "react";
import Child from "./Child.js";

export default function Parent() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="parent">
      <h1>Parent Component</h1>

      <Child inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}
