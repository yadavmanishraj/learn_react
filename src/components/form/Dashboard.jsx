import {
  Box,
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  ScaleFade,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import DataTable from "./DataTable";
import { AuthContext } from "./FormApp";
import TodoAdd from "./TodoAdd";

export default function Dashboard() {
  const userContext = useContext(AuthContext);
  const [todos, setTodo] = useState([]);
  const [filterFor, setFilterFor] = useState("");

  const collectionRef = collection(db, "todos");

  useEffect(() => {
    const q = query(collection(db, "todos"));

    onSnapshot(q, (snapshot) => {
      const todos = [];

      snapshot.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      });
      setTodo(todos);
      console.log(todos);
    });
  }, []);

  function addTodo(todo) {
    addDoc(collectionRef, {
      todo: todo,
      time: new Date().toLocaleString("en-UK"),
    });
  }

  function changeStatus(todo) {
    try {
      const todoRef = doc(db, "todos", todo.id);
      if (todo.status === "Deleted") {
        deleteDoc(todoRef);
      } else updateDoc(todoRef, { status: todo.status });
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <Box>
      <Box>
        <InputGroup gap={"10px"}>
          <InputLeftElement children={<MdSearch size={"30px"} />} />
          <Input
            value={filterFor}
            onChange={(e) => setFilterFor(e.target.value)}
            placeholder="Search"
          />
          <Button onClick={userContext.deauthenticate}>Logout</Button>
        </InputGroup>
      </Box>
      <Container minW={"max-content"} colorScheme={"orange"} w="100%">
        Welcome {userContext.user.email} <TodoAdd onTodo={addTodo} />
        {/* {todos.map((todo) => {
        return <li key={todo.id}>{todo.todo}</li>;
      })} */}
        <ScaleFade in offsetY={"200px"}>
          <DataTable
            filterFor={filterFor}
            data={todos}
            changeStatus={changeStatus}
          />
        </ScaleFade>
      </Container>
    </Box>
  );
}
