import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";
import Login from "./pages/Login";

function App() {
  let router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/transactions", element: <Transaction /> },
    { path: "/login", element: <Login /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
