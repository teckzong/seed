import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";
import Root from "./pages/Root";
import Error from "./pages/Error";
import MainDashBoard from "./pages/MainDashBoard";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "main", element: <MainDashBoard /> },
        { path: "transactions", element: <Transaction /> },
        { path: "createClaim" },
        { path: "editClaim" },
        { path: "removeClaim" },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
