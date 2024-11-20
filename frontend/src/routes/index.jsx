import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
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
            }
            
        ]
    }
])

export default router;

