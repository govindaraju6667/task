import React, { useReducer } from "react";

const reducer = (state, action) => {
  //   if (action.type === "plus") {
  //     return state + 1;
  //   } else {
  //     return state - 1;
  //   }
  switch (action.type) {
    case "add":
      return {
        count: state.count + 1,
      };
    case "subtract":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const Note = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "subtract" })}>Minus</button>

      {/* <button onClick={() => dispatch({ type: "divide" })}>Divide</button> */}
    </div>
  );
};
