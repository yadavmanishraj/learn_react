import { useState } from "react";

export default function AddTask({ onTaskAdd }) {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    onTaskAdd(todo);
    setTodo("");
  };

  return (
    <div className="add_container">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
