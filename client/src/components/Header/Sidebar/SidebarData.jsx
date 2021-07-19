import React, { useState } from "react";
import { FaBars, FaDigitalTachograph } from 'react-icons/fa';
import {AiFillHome, AiOutlineClose, AiFillPieChart, AiFillPhone} from "react-icons/ai";
import {IoAnalyticsSharp  } from 'react-icons/io5';


export const SidebarData = [
    {   
        title : "Home",
        path : "/dashboard",
        icon : <AiFillHome />,
        cName : 'side-text'
    },
    {   
        title : "Overview",
        path : "/dashboard/overview",
        icon : <AiFillPieChart />,
        cName : 'side-text'
    },
    {   
        title : "PipelineMap",
        path : "/dashboard/pipeline-map",
        icon : <IoAnalyticsSharp />,
        cName : 'side-text'
    },
    {   
        title : "Contact",
        path : "/dashboard/contact",
        icon : <AiFillPhone />,
        cName : 'side-text'
    }

]