import { createBrowserRouter } from "react-router";
import Rootlayout from '../Layout/Rootlayout'
import Home from '../page/Home'
import Doctor from "../page/Doctor";
import Medicine from "../page/Medicine";
import About from "../page/About";
import Contact from "../page/Contact";
import Login from "../page/Login";
import Register from "../page/Register";
import Medicines from "../page/Medicines";
import Services from "../page/Services";
import Health_tips from "../page/Health_tips";
import News from "../components/News";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "doctors",
        Component: Doctor,
      },
      {
        path: "medicine",
        Component: Medicine ,
      },
      {
        path: "about",
        Component: About ,
      },
      {
        path: "contact",
        Component: Contact ,
      },
      {
        path: "login",
        Component: Login ,
      },
      {
        path: "register",
        Component: Register ,
      },
      {
        path: "medicines",
        Component: Medicines ,
      },
      {
        path: "services",
        Component: Services,
      },
    {
  path: "health_tips/:id",
  Component: Health_tips,
},
   {
  path: "/news/:id",
  Component: News,
}

    ]
  },
]);
