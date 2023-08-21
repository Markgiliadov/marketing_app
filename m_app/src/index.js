import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Video from "./Video";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      <Home />
      /* <App /> */
    }
  </React.StrictMode>
);
