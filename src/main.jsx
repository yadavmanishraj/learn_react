// import { ChakraProvider, extendTheme} from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import FormApp from "./components/form/FormApp";
// import RouteSettings from "./components/RouteSttings";
// import App from './App'
// import Count from './exp/Count'

// const config = {
//   initialColorMode: 'dark',
//   useSystemColorMode: true,
// }

// const theme = extendTheme({
//   fonts: {
//     heading: `Inter`,
//     body: `Inter`,
//   },
//   config
// })

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <FormApp />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
