import {
    List,
    ListItem,
    Card,
    CardBody,
    Text,
    Heading,
    Button,
    Box,
} from '@chakra-ui/react'

export default function TodoList({ todos, onDelete, onEdit }) {
    console.log(todos)

    return <List spacing={3}>
        {
            todos.map((todo) => {
                return <ListItem key={todo.id}>
                    <Card shadow={'md'}>
                        <CardBody>
                            <Heading size='md' >{todo.data.todo}</Heading >
                            <Text textColor='grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iusto quae ut maiores atque. Accusamus quo, ad voluptas quis deserunt numquam voluptatem quos beatae commodi repellendus itaque nemo assumenda adipisci.</Text>
                        </CardBody>
                        <Box display={'flex'} gap='2'>
                        <Button onClick={() => {
                            onDelete(todo.id);
                        }} variant='ghost' colorScheme='blue'>
                            Delete
                        </Button>
                        <Button onClick={() => onEdit(todo.id)} variant='ghost' colorScheme='blue'>
                            Edit
                        </Button>
                        </Box>
                    </Card>
                </ListItem>
            })



        }
    </List>
}