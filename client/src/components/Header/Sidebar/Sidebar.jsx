import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import {AiOutlineClose} from "react-icons/ai";
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData"
import {IconContext} from "react-icons";
import "./Sidebar.css";

function Sidebar(){
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar); 
    
    const InactiveSidebar = () => {
            return (
                
                SidebarData.map((item, index) => {
                return (
                    <div>
                    <li key={index} className="side-items-inactive">
                    <Link to={item.path} className="side-items-inactive">
                        {item.icon} 
                    </Link> 
                    </li>
                    </div>
                   
                )
            }))
           
            ;
        };
    
    const ActiveSidebar = () => {
        return (SidebarData.map((item, index) => {
            return (
                <div>
                    <li key={index} className="side-items-active">
                        <Link to={item.path} className="side-items-active" onClick={showSidebar}>
                            {item.icon} {item.title}
                        </Link>
                    </li>
                </div>
            );
        }))
    }; 

    return (
        <>
        {sidebar 
        ? 
        <div className="side-menu-active">
        <Link to="#" className="sidebar-toggle">
        <AiOutlineClose onClick={showSidebar} style={{color:"#fff"}} />
        </Link>
        <ActiveSidebar className="" /> 
        </div>
        : 
        <div className="side-menu-inactive"> 
        <Link to="#" className="sidebar-toggle">
        <FaBars onClick={showSidebar} style={{color:"#fff"}} />
        </Link>
        <InactiveSidebar /> </div>}



        </>
    );
}

export default Sidebar;