import { Slide } from "@chakra-ui/react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "../../firebase";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NotFound from "./NotFound";
import RequireAuth from "./RequireAuth";

const initialValue = {
  user: null,
  authenticate: () => {},
  deauthenticate: () => {},
};

const AuthContext = createContext(initialValue);

export default function FormApp() {
  const [user, setUser] = useState(initialValue);

  const authenticate = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      createUserWithEmailAndPassword(auth, email, password);
    });
  };

  const deauthenticate = () => {
    signOut(auth);
  };

  useEffect(() => {
    console.log("user effect");
    onAuthStateChanged(auth, (usr) => {
      setUser({ ...user, user: usr });
    });
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
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
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
