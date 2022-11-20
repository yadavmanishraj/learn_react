import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function TodoCreate({onAdd}) {
    const [todo, setTodo] = useState('');

    const addTodo = (e) => {
        setTodo(e.target.value);

    }

    return <Box gap={'5px'} display={'flex'} flexDirection='row'>
        <Input value={todo} onChange={addTodo}/>
        <Button onClick={() => onAdd(todo)}>Add Todo</Button>
    </Box>
}