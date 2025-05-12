import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        elements:<Root></Root>,

        children: [
             {
                path: '/',
                element:<Home></Home>,
                
             },
              {
                path: '/login',
                element:<Login></Login>,
             },

             {
                path: '/register',
                element:<Register></Register>,
             }
        ]
    }
])
export default router;