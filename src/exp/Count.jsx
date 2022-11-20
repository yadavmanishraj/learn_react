import { useReducer } from "react";
import AddTask from "./AddTask";
import TodoList from "./TodoList";
import todoReducer, { actions } from "./TodoReducer";
import "./todo.css";

export default function Count() {
  const [state, dispatch] = useReducer(todoReducer, []);

  function addTodo(action) {
    dispatch({ type: actions.add, todo: action });
  }

  function deleteTodo(id) {
    dispatch({ type: actions.remove, id: id });
  }

  function updateTodo(id, action) {
    dispatch({ type: actions.update, id: id, todo: action });
  }

  return (
    <div className="app">
      <AddTask onTaskAdd={addTodo} />
      <TodoList onUpdate={updateTodo} todos={state} onDelete={deleteTodo} />
    </div>
  );
}
