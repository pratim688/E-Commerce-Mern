import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import AdminPanal from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";
//import AdminPanel from "../pages/AdminPanel";
//import AdminDashBoard from "../pages/AdminDashBoard";
//import About from "../pages/About";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        errorElement : <ErrorPage />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "/forgot-password",
                element : <ForgotPassword />
            },
            {
                path : "/signup",
                element : <SignUp />
            },
            {
                path : "/admin-panel",
                element : <AdminPanal />,
                children:[
                    {
                        path:"all-users",
                        element:<AllUsers/>
                    },
                    {
                        path:"all-products",
                        element:<AllProducts/>

                    }
                ]
            }
            
            
            
        ]
    }
])

export default router;

