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

  if (userContext.email) {
    return <Navigate to="/" />;
  }

  function reset() {
    setPassword("");
    setEmail("");
  }

  return (
    <Container>
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
          placeholder="e.g. grublin777@gmail.com"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          w={"100%"}
          variant={"solid"}
          colorScheme="blue"
          type="button"
          onClick={() => userContext.authenticate(email)}
          value="Click"
        >
          Login
        </Button>
        <Link to={"/namesers"}>Another Page</Link>
      </VStack>
    </Container>
  );
}
