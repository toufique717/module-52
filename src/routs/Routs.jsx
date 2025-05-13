import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../pages/Home/News";
import Privateroute from "./privateroute";

const router = createBrowserRouter([
    {
        path: '/',
        elements:<Root></Root>,

        children: [
             {
                path: '/',
                element:<Home></Home>,
                loader: ()=> fetch('/news.json')
             },

             {
                path: '/news/:id',
                element: <Privateroute> <News></News></Privateroute>,
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