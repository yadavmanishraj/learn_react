import { Slide } from "@chakra-ui/react";
import RequireAuth from "./RequireAuth";

export default function TransitPage({ children, authedRoute }) {
  if (authedRoute) {
    return (
      <Slide direction="right" in>
        <RequireAuth>{children}</RequireAuth>
      </Slide>
    );
  }
  return (
    <Slide direction="right" in>
      {children}
    </Slide>
  );
}
