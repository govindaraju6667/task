import axios from "axios";
import React, { useEffect, useState } from "react";

const ServerData = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [form, setForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    fetchServerData();
  }, []);

  const fetchServerData = () => {
    axios
      .get("http://localhost:3030/posts")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log("error", error));
  };

  const handleDelete = (itemId) => {
    axios
      .delete(`http://localhost:3030/posts/${itemId}`)
      .then((response) => {
        console.log(response);
        fetchServerData();
      })
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = () => {
    if (edit) {
      const updatedItem = {
        title: title,
        body: body,
      };

      axios
        .put(`http://localhost:3030/posts/${setEdit}`, updatedItem)
        .then((response) => {
          console.log("updated:", response.data);
          fetchServerData();
          setTitle("");
          setBody("");
        })
        .catch((error) => console.log("Error", error));
    } else {
      const newItem = {
        title: title,
        body: body,
      };
      // console.log(title);
      // console.log(body);

      axios
        .post("http://localhost:3030/posts", newItem)
        .then((response) => {
          console.log(response);
          fetchServerData();
          setTitle("");
          setBody("");
          setForm("false");
        })
        .catch((error) => console.log("error", error));
    }
  };

  const handleEdit = (item) => {
    setEdit(true);
    setTitle(item.title);
    // console.log(item.title)
    setBody(item.body);
    setItemId(item.id);
    setForm("true");
  };

  // console.log(title);

  return (
    <div id="main-container">
      <h1>Api Data</h1>
      <button onClick={() => setForm(true)}>Add</button>

      {form && (
        <form id="popup">
          <label>
            Title
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </label>
          <br />
          <label>
            Body
            <input
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></input>
          </label>
          <br />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}

      {data &&
        data.map((item) => {
          return (
            <div>
              <h1>{item.title}</h1>
              <h2>{item.body}</h2>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default ServerData;
