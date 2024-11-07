import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import Statistics from "../Components/Statistics/Statistics";
import Products from "../Components/Products/Products";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Faq from "../Components/Faq/Faq";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path:'/',
          element: <Home></Home>,
          loader: () => fetch('/categories.json'),
          children:[
            {
              path:'/',
              element: <Products />,
              loader: () => fetch('/productsData.json'),
            },
            {
              path:'/category/:category',
              element: <Products />,
              loader: () => fetch('/productsData.json'),
            },
          ],
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>,
        },
        {
          path:'/dashboard',
          element: <Dashboard></Dashboard>,
        },
        {
          path:'/faq',
          element: <Faq></Faq>,
        },
        {
          path:'products/:product_id',
          element: <ProductDetails />,
          loader: () => fetch('/productsData.json'),
        },
  
      ],
    },
  ]);

  export default routes 