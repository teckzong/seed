import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ClaimsDashboard from "./pages/ClaimsDashboard";
import CreateClaim, { action as CreateClaimAction } from "./pages/CreateClaim";
import Login from "./pages/Login";
import EditClaim, {
  loader as claimInfoLoader,
  action as editClaimAction,
} from "./pages/EditClaim";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "transactions", element: <Transaction /> },
        { path: "dashboard", element: <ClaimsDashboard /> },
        {
          path: "createclaim",
          element: <CreateClaim />,
          action: CreateClaimAction,
        },
        { path: "removeClaim" },
        // { path: "/login", element: <Login /> },
        {
          path: ":insuranceId/editClaim",
          element: <EditClaim />,
          loader: claimInfoLoader,
          action: editClaimAction,
          t,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
