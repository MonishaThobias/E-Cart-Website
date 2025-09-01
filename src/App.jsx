import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
import Checkout from "./Pages/Checkout";
import Layout from "./Layout";

export  const router = createBrowserRouter([
  {path:'/', Component:Home},
  {path:'', Component:Layout, children:
    [
  {path:'/products', Component:Products },
  {path:'/cart',Component:Cart},
  {path:'/orders',Component:Orders},
  {path:'/checkout',Component:Checkout},
  
  
]

}
])