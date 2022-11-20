import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TodoCreate from "./components/TodoCreate";
import { db } from './firebase'
import { collection, addDoc, getDocs, deleteDoc, getDoc, doc, updateDoc, onSnapshot } from 'firebase/firestore'
import TodoList from './components/TodoList';

const FirebaseTodo = React.createContext({
  addTodo: (todo) => { },
  deleteTodo: (id) => { },
  getTodos: () => { },
  updateTodo: (id, todo) => { },
  todos: [],
});




export default function App() {
  const [todos, setTodos] = useState([])
const todoCollection = collection(db, 'todos')


  const addTodo = (todo) => {
    addDoc(todoCollection, { todo: todo });
    // fetchData();
  }

  const onDelete = (id) => {
    deleteDoc(doc(db, 'todos', id));
    // fetchData();
  }

  function liveUpdate() {
    onSnapshot(todoCollection, docsRef => setTodos(docsRef.docs.map(doc => {
      return {data: doc.data(), id: doc.id};
    })))
  }

  // async function fetchData()  {
  //  const docs =  await getDocs(todoCollection).then(docsRef => docsRef.docs.map((val) => {return {data: val.data(), id: val.id}}));
  //  setTodos(docs);
  // }

  function editTodo(id) {
    const todoRef = doc(db, 'todos', id);
    updateDoc(todoRef, {
      todo: "Updated"
    })
    // fetchData();
  }

  useEffect(function()  {
    liveUpdate();
    // fetchData()
  }, []);

  return <Box h={'full'} w='100%' p={'5'}>
    <FirebaseTodo.Provider value={{addTodo: addTodo, getTodos: todos}}>
      <TodoCreate onAdd={addTodo} />
      <TodoList onEdit={editTodo} onDelete={onDelete} todos={todos}/>
    </FirebaseTodo.Provider>
  </Box>
}