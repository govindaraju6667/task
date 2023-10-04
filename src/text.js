import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

function Todo() {
  const [todoValue, setTodoValue] = useState();

  function reducer(state, action) {
    switch (action.type) {
      case "remove":
        const newList = state.filter((item) => item.id !== action.id);
        return newList;
      case "add":
        setTodoValue("");
        return [...state, { id: state.length + 1, text: todoValue }];
      default:
        throw new Error();
    }
    
  }

  const [state, dispatch] = useReducer(reducer, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Write a task: </label>
        <input
          type="text"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button onClick={() => dispatch({ type: "add", text: todoValue })}>
          Add
        </button>
      </form>
      <div>
        {state.map((todo) => (
          <div className="Row" key={todo.id}>
            <p>{todo.text}</p>
            <button onClick={() => dispatch({ type: "remove", id: todo.id })}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
