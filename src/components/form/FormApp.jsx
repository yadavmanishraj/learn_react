import { Slide } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NotFound from "./NotFound";
import RequireAuth from "./RequireAuth";

const initialValue = {
  email: null,
  authenticate: () => {},
  deauthenticate: () => {},
};

const AuthContext = createContext(initialValue);

export default function FormApp() {
  const [user, setUser] = useState(initialValue);

  const authenticate = (email) => {
    localStorage.setItem("email", email);
    setUser({ ...user, email: email });
  };

  const deauthenticate = () => {
    localStorage.removeItem("email");
    setUser({ ...user, email: null });
  };

  useEffect(() => {
    setUser({ ...user, email: localStorage.getItem("email") });
  }, []);

  return (
    <div>
      <AuthContext.Provider
        value={{
          ...user,
          authenticate: authenticate,
          deauthenticate: deauthenticate,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Slide direction="right" in>
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              </Slide>
            }
          />
          <Route
            path="/login"
            element={
              <Slide direction="righ" in>
                <Login />
              </Slide>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export { AuthContext };
