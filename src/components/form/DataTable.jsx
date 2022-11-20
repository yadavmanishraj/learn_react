import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function DataTable({ data, changeStatus, filterFor }) {
  return (
    <TableContainer>
      <Table overflow={"scroll"} variant="striped" colorScheme="orange">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            <Th>Todos</Th>
            <Th>Status</Th>
            <Th isNumeric>Date</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data
            .filter(
              (todo) =>
                todo.todo.toLowerCase().search(filterFor.toLowerCase()) !== -1
            )
            .map((todo) => {
              return (
                <Tr key={todo.id}>
                  <Td>{todo.todo}</Td>
                  <Td>
                    <Tag colorScheme={"gray"}>
                      {todo.status ?? "In Progress"}
                    </Tag>
                  </Td>
                  <Td isNumeric>{todo.time ?? "Not Avialable"}</Td>
                  <Td isNumeric>
                    <Menu>
                      <MenuButton as={Button} colorScheme="orange">
                        {todo.status ?? "In Progress"}
                      </MenuButton>
                      <MenuList>
                        <MenuItem
                          onClick={() => {
                            changeStatus({ ...todo, status: "completed" });
                          }}
                        >
                          Completed
                        </MenuItem>
                        <MenuItem
                          onClick={() =>
                            changeStatus({ ...todo, status: "Deleted" })
                          }
                        >
                          Delete
                        </MenuItem>
                        <MenuItem
                          onClick={() =>
                            changeStatus({ ...todo, status: "In Progress" })
                          }
                        >
                          Progress
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
