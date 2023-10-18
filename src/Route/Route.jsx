import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Addpage from "../Pages/Addpage/Addpage";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import SignUp from "../Components/Sign-Up/SignUp";
import Login from "../Components/Login/Login";
import Users from "../Components/Users";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader:()=> fetch("https://tea-store-server-ijzpdnby4-mamunhero.vercel.app/tea")
      },
      {
        path: "/addpage",
        element: <Addpage></Addpage>,
      },
      {
        path: "/updatepage/:id",
        element: <UpdatePage></UpdatePage>,
        loader: ({ params }) => fetch(`https://tea-store-server-ijzpdnby4-mamunhero.vercel.app/tea/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("https://tea-store-server-ijzpdnby4-mamunhero.vercel.app/user"),
      },
    ],
  },
]);

export default Route;
