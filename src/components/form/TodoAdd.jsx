import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function TodoAdd({ onTodo }) {
  const [todo, setTodo] = useState("");

  return (
    <HStack p={"5"}>
      <Input
        autoFocus
        placeholder="Add todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        onClick={() => {
          onTodo(todo);
          setTodo("");
        }}
      >
        Add Todo
      </Button>
    </HStack>
  );
}
