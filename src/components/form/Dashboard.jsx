import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "./FormApp";

export default function Dashboard() {
  const userContext = useContext(AuthContext);
  return (
    <h1>
      Welcome {userContext.email}{" "}
      <Button onClick={userContext.deauthenticate}>Logout</Button>
    </h1>
  );
}
