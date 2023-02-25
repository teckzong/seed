import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";

function App() {
  let router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/transactions", element: <Transaction /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
