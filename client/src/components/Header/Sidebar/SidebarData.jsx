import React from "react";
import {AiFillHome, AiFillPieChart, AiFillPhone} from "react-icons/ai";
import {IoAnalyticsSharp  } from 'react-icons/io5';


export const SidebarData = [
    {   
        title : "Home",
        key : 1,
        path : "/dashboard",
        icon : <AiFillHome />,
        cName : 'side-text'
    },
    {   
        title : "Overview",
        key : 2,
        path : "/dashboard/overview",
        icon : <AiFillPieChart />,
        cName : 'side-text'
    },
    {   
        title : "Pipeline Map",
        key : 3,
        path : "/dashboard/pipeline-map",
        icon : <IoAnalyticsSharp />,
        cName : 'side-text'
    },
    {   
        title : "Contact",
        key : 4,
        path : "/dashboard/contact",
        icon : <AiFillPhone />,
        cName : 'side-text'
    }

]