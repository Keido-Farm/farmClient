import {
  createBrowserRouter, redirect,
} from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/RegisterAbk";
import Home from "../views/Home";
import Layout from "../components/Layout";
import DailyReport from "../views/DailyReport";
import RegisterAdmin from "../views/RegisterAdm";
import TablePeriod from "../views/Period";
import TableWeekly from "../views/Weekly";

const router = createBrowserRouter([
  {
    element:<Layout/>,
    loader:() => {
      const access_token = localStorage.getItem('access_token');
      const role = localStorage.getItem('role')
      if(!access_token){
        throw redirect("/login")
      }

      if(role !== 'admin'){
        throw redirect("/login")
      }
      return null;
    },
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/register-admin",
        element: <RegisterAdmin/>,
      },
      {
        path: "/period-list/:id",
        element: <TablePeriod/>,
      },
      {
        path: "/weekly-list/:id",
        element: <TableWeekly/>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
    loader:() => {
      const accessToken = localStorage.getItem('access_token');
      const role = localStorage.getItem('role')
      if(accessToken){
        if(role === 'admin')
        throw redirect('/')
        if(role === 'abk')
        throw redirect('/daily-report')
      }

      return null
    }
  },
  {
    path: "/register-abk",
    element: <Register/>,
  },
  {
    path: "/daily-report",
    element: <DailyReport/>,
    loader:() => {
      const access_token = localStorage.getItem('access_token');
      if(!access_token){
        throw redirect("/login")
      }
      return null;
    }
  },
  
]);

export default router;