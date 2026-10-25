import React from "react";

export default function Child({ inputValue, setInputValue }) {
  return (
    <div className="child">
      <h2>Child Component</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
