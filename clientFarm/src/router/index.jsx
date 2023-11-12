import {
  createBrowserRouter, redirect,
} from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/RegisterAbk";
import Home from "../views/Home";
import Layout from "../components/Layout";
import DailyReport from "../views/dailyReport";
const router = createBrowserRouter([
  {
    element:<Layout/>,
    loader:() => {
      const access_token = localStorage.getItem('access_token');
      if(!access_token){
        throw redirect("/login")
      }
      return null;
    },
    children:[
      {
        path: "/",
        element: <Home/>,
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
  },
  
]);

export default router;