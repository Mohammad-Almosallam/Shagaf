import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ChakraProvider
    theme={extendTheme({
      fonts: {
        body: `'Cairo', sans-serif`,
        heading: `'Cairo', sans-serif`,
      },
      breakpoints: {
        sm: "320px",
        md: "468px",
        lg: "1160px",
        xl: "1200px",
        "2xl": "1536px",
      },
    })}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
