import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import "./Overview.css"
import {Helmet} from "react-helmet"
import PieChart from "./OverviewComponents/PieChart.jsx"

function Overview(){

    const data = [{name: '2019', AssetHealth: 400, pv: 2400, amt: 2400}, 
                  {name: '2020', AssetHealth: 420, pv: 2500, amt: 2400},
                  {name: '2021', AssetHealth: 390, pv: 2600, amt: 2400},
                  {name: '2022', AssetHealth: 700, pv: 2500, amt: 2400}];

    const nextMaintenanceDate="30th July 2021";

    return(
            
        <div className="overview-div">
            <Helmet>
                <style>{'body { background-color: #FAF9F6; }'}</style>
            </Helmet>

            <h1 className="overview-title"> Overview </h1>

            <div className="trends-container">
            <p className="asset-health"> Assets Health </p>
            <LineChart className="asset-health-chart" width={200} height={100} data={data}>
            <Line type="monotone" dataKey="AssetHealth" stroke="#8884d8" />    
            <Tooltip />
            </LineChart>
        
            <p className="next-maintenance"> Next Maintenance Due on :- <b>{nextMaintenanceDate}</b> </p>
            </div>

            <div className="pie-chart-container">
                <p className="summary-headings"> Valves Summary </p>
                <PieChart className="pie-chart" />

                <div className="pie-chart-savgen">
                <p className="summary-headings">Maintained by Savgen </p>
                <PieChart className="pie-chart" />
                </div>
            </div>

            <div className="maintenance-report-container">

            <p className="maintenance-report-headings"> Maintenance Report </p>


            </div>

            <div className="next-service-container">

            <p className="maintenance-report-headings"> Next Steps </p>


            </div>

        </div>
    )
}

export default Overview;