import React from "react";
import {AiFillHome, AiFillPieChart} from "react-icons/ai";
import {GiValve} from "react-icons/gi"
import {FaMapMarkedAlt} from "react-icons/fa"



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
        icon : <FaMapMarkedAlt />   ,
        cName : 'side-text'
    },
    {   
        title : "My Valves",
        key : 4,
        path : "/dashboard/myvalves",
        icon : <GiValve />,
        cName : 'side-text'
    }

]