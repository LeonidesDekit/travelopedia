import React from "react";
import ReactDOM from "react-dom/client";
import DestinationList from "./components/DestinationList";
import Header from "./layout/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <DestinationList />
  </React.StrictMode>
);
