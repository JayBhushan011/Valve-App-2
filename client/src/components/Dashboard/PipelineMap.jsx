import React from "react";
import {MapContainer, TileLayer, Marker, Popup, Polyline} from "react-leaflet"
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./PipelineMap.css"
import terminalMarker from "../../assets/images/storage-tank.jpeg";


function PipelineMap(){
    
    // const desuToMotibagh = {
    //     "GailDesu" : [28.618906, 77.253643],
    //     "Motibagh SV station" : [28.578247, 77.175552]
    // }
    const desuToMotibagh = 
        [ 
            [28.618906, 77.253643],
            [28.617700, 77.249989],
            [28.609541, 77.252232],
            [28.610385, 77.232529],
            [28.610396, 77.232554],
            [28.580599, 77.179602],
            [28.578247, 77.175552],
        ]

    const svStationMotibagh ={
        "location": [28.578247, 77.175552],
        "valves" : ["mb0001", "mb0002"]
    }

    var terminalIcon = L.icon({
        iconUrl: terminalMarker,
    
        iconSize:     [38, 95], // size of the icon
        iconAnchor:   [22, 70], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    const steelOptions = { color: '#43464B' };
    return (
    <MapContainer center={[28.618906, 77.253643]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright"> </a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    <Marker position={[28.618906, 77.253643]} icon={terminalIcon}>
        <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
    </Marker>
    <Polyline pathOptions={steelOptions} positions={desuToMotibagh} />
    </MapContainer>
        
    )
};

export default PipelineMap;