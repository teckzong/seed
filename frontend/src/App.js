import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ClaimsDashboard from "./pages/ClaimsDashboard";
import CreateClaim, { action as CreateClaimAction } from "./pages/CreateClaim";
import Login from "./pages/Login";
import EditClaim, { loader as claimInfoLoader } from "./pages/EditClaim";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "transactions", element: <Transaction /> },
        { path: "claimsdashboard", element: <ClaimsDashboard /> },
        {
          path: "createclaim",
          element: <CreateClaim />,
          action: CreateClaimAction,
        },
        { path: "removeClaim" },
        // { path: "/login", element: <Login /> },
        { path: "editClaim", element: <EditClaim />, loader: claimInfoLoader },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
