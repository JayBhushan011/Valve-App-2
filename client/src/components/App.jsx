import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import PrivateRoute from "./PrivateRoute";
// Import Components 
import Header from "./Header/Header.jsx"
import Homepage from "./Homepage/Homepage.jsx"
import Dashboard from "./Dashboard/Dashboard.jsx"
import Sidebar from "./Header/Sidebar/Sidebar.jsx"
import Login from "./User/Login.jsx"
import PipelineMap from "./Dashboard/PipelineMap"
import Overview from "./Dashboard/Overview"
// ******

// Routes   ---- MAKE IT PRIVATE ROUTE TO CHECK IF AUTHTOKEN IS PASSED 
function App(){
    return (
         
    <Router>
   
        <Header />
        <Route path = "/login" exact component = {Login} />
        <Route path = "/" exact component = {Homepage}/>
        <PrivateRoute path = "/dashboard" component = {Sidebar} /> 
        <Route path = "/dashboard" exact component = {Dashboard} />
        <Route path = "/dashboard/pipeline-map" exact component = {PipelineMap} />
        <Route path = "/dashboard/overview" exact component = {Overview} />
        
    </Router>
    
    
    
    );
}

// ******


export default App;