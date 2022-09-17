import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { JobContextProvider } from "./context/JobContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <JobContextProvider>
         <App />
      </JobContextProvider>
   </React.StrictMode>
);

