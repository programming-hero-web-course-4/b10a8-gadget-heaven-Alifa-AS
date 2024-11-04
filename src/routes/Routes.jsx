import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import Statistics from "../Components/Statistics/Statistics";


const routes = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path:'/',
          element: <Home></Home>,
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>,
        },
        {
          path:'/dashboard',
          element: <Dashboard></Dashboard>,
        }
      ]
    },
  ]);

  export default routes 