import { Fragment, useState } from "react";
import { data, data2 } from "./Data";

const Working = () => {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState("");
  const [text, setText] = useState("");

  const handleTodo = () => {
    setTodos([...data]);
  };

  const handleEdit = (id) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          titile: text,
        };
      }
      return todo;
    });
    setTodos(updatedTodo);
    setEditId("");
    setText("");
  };

  return (
    <div className="root-list">
      <div className="list-data">
        <h1>list data</h1>
        <ul>
          {todos.length === 0 ? (
            <p>No todo Found</p>
          ) : (
            todos.map((todo) => {
              return (
                <div key={todo.id}>
                  {editId === todo.id ? (
                    <>
                      <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                      <button onClick={() => handleEdit(todo.id)}>save</button>
                    </>
                  ) : (
                    <li>
                      {todo.titile}{" "}
                      <button
                        onClick={() => {
                          setEditId(todo.id);
                          setText(todo.titile);
                        }}
                      >
                        edit
                      </button>
                    </li>
                  )}
                </div>
              );
            })
          )}
        </ul>
        <button onClick={handleTodo}>Clicked me for initial load</button>
        <button>Clicked me for more data load</button>
      </div>
    </div>
  );
};

export default Working;
