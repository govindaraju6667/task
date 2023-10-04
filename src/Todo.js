import React from "react";

export const Todo = () => {
  const [value, setValue] = useState();

  function reducer(state, action) {
    switch (action.type) {
      case "remove":
        const newList = state.filter((item) => item.id !== action.id);
        return newList;
      case "add":
        setTodovalue("");
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
    <div>
      <input type="text" onSubmit={handleSubmit}></input>
      <label>write a task:</label>
      <button>Submit</button>
    </div>
  );
};
