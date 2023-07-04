import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Login } from "./routes/login";
import { Waiter } from "./routes/waiter"
import { Admin } from "./routes/Admin";
import { Chef } from "./routes/Chef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/waiter",
    element: <Waiter />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/chef",
    element: <Chef />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
    <RouterProvider router = { router } />
  //</React.StrictMode>
);