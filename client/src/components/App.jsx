import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Import Components 
import Header from "./Header/Header.jsx"
import Homepage from "./Homepage/Homepage.jsx"
import Dashboard from "./Dashboard/Dashboard.jsx"
import Sidebar from "./Header/Sidebar/Sidebar.jsx"
import Login from "./User/Login.jsx"
import PipelineMap from "./Dashboard/PipelineMap"
import Overview from "./Dashboard/Overview"
// ******

// Routes 
function App(){
    return (

    <Router>
        <Header />
        <Route path = "/login" exact component = {Login} />
        <Route path = "/home" exact component = {Homepage}/>
        <Route path = "/dashboard" component = {Sidebar} />
        <Route path = "/dashboard" exact component = {Dashboard} />
        <Route path = "/dashboard/pipeline-map" exact component = {PipelineMap} />
        <Route path = "/dashboard/overview" exact component = {Overview} />
    </Router>
    
    
    );
}

// ******


export default App;