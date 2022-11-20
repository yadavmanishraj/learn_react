import { Button, Container, Input, Text, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "./FormApp";

export default function Login() {
  const userContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  if (userContext.user) {
    return <Navigate to="/" />;
  }

  return (
    <Container colorScheme={"orange"}>
      <VStack alignItems={"flex-start"}>
        <Text fontSize={"xx-large"}>Login with Email</Text>
        <Input
          type="email"
          value={email}
          placeholder="e.g. grublin777@gmail.com"
          onChange={changeEmail}
        />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          w={"100%"}
          colorScheme="orange"
          variant={"solid"}
          type="button"
          onClick={() => userContext.authenticate(email, password)}
          value="Click"
        >
          Login
        </Button>
        <Button
          colorScheme="orange"
          w={"100%"}
          variant={"solid"}
          type="button"
          onClick={() => userContext.authenticate(email, password)}
          value="Click"
        >
          Register
        </Button>
        <Link to={"/namesers"}>Another Page</Link>
      </VStack>
    </Container>
  );
}
