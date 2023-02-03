import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main/Main";
import AddStudent from "../pages/AddStudent/AddStudent";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import ManageStudent from "../pages/ManageStudent/ManageStudent";
import SignUp from "../pages/SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element: <Login></Login>
            },
            {
                path : '/signup',
                element: <SignUp></SignUp>
            },
            {
                path : '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
                
                children : [
                    {
                        path : "/dashboard/addstudent",
                        element :  <AddStudent></AddStudent>
                    },
                    {
                        path : "/dashboard/manage",
                        element :  <ManageStudent></ManageStudent>
                    },
                   
                ]
            },
        ]
    },

    
])