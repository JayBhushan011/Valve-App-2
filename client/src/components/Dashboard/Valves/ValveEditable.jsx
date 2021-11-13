import { useState } from "react";
import "./ValveEditable.css";
import {ValveTypes, ValveManufacturers} from "./DataValidator"
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

function Valve(props) {
  //props.ID is the ID of each valve
  const [count, setCount] = useState(0);
  const [editable, setEditable] = useState(false);
  const [valveType, setValveType] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  function nextImage() {
    let limit = props.PhotosURL.length;
    setCount((prevCount) => (prevCount + 1) % limit);
  }
  function previousImage() {
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function save(){
    setEditable(false)
  }
  const handleSubmit= (e) => {
    e.preventDefault();
    console.log("Submitted")
  }

  function Editing(editable){ 
    return (
      <form onSubmit={e => {handleSubmit(e)}}>
      <div className={props.className}>
      <button className="edit-btn-on" onClick={() => setEditable(false)}> Close </button>
      <button className="save-btn" onClick={save} type="submit"> Save </button>
        <div className="valve-content">
          <Form.Group controlId="formBasicSelect">
            <Form.Label> Select Valve Type </Form.Label>
            <Form.Control
              as="select"
              value={valveType}
              onChange={(e) => {
                setValveType(e.target.value);
              }}
            >
              {ValveTypes.map(x => <option value={x.Name}> {x.Name}</option>)}
            </Form.Control>
          </Form.Group>
          
          <label> Enter Serial Number {" "} </label>
          <input name="SerialNumber" type="text" placeholder={props.SerialNumber} value={serialNumber} onChange={(e)=>setSerialNumber(e.target.value)} />
          
          
          <div className="valve-description">
            <h4> Valve Description </h4>
  
            <div className="images" style={{ float: "right" }}>
              {props.PhotosURL.length === 1 ? null : (
                <i className="arrow left" onClick={previousImage}>
                  {" "}
                </i>
              )}
  
              <img
                src={props.PhotosURL[count]}
                style={{ height: "180px", maxWidth: "400px" }}
                key={props.SerialNumber + count}
                alt={"valve "}
              />
  
              {props.PhotosURL.length === 1 ? null : (
                <i className="arrow right" onClick={nextImage}>
                  {" "}
                </i>
              )}
            </div>
  
            <p> Manufacturer : {props.Make} </p>
            
  
            <p> Series : {props.Series} </p>
            <a href={props.Manual} target="_blank" rel="noopener noreferrer">
              {" "}
              Official Manual{" "}
            </a>
            <p  > Valve size : {props.ValveSize} inches </p>
          </div>
  
          <div className="valve-health">
            <h4> Valve Health </h4>
            <p >
              Time since last maintenace :{props.TimeSinceLastMaintenance} days{" "}
            </p>
            {props.leaking ? (
              <p > Leak was detected : {props.TypeOfLeak} leak. </p>
            ) : (
              <p> No leak detected </p>
            )}
          </div>
        </div>
      </div>
      </form>
      )
  };

  function NotEditing(editable){ 
    return (
    <div className={props.className}>
    <button className="edit-btn-off" onClick={() => setEditable(true)}> Edit </button>
      <div className="valve-content">
        <h2 className="valve-title">
          {" "}
          {props.ValveType} Valve :
          {props.SerialNumber ? (
            props.SerialNumber
          ) : (
            <i style={{ fontSize: "0.8em" }}> Unknown Serial Number </i>
          )}{" "}
        </h2>
        
        
        
        <div className="valve-description">
          <h4> Valve Description </h4>

          <div className="images" style={{ float: "right" }}>
            {props.PhotosURL.length === 1 ? null : (
              <i className="arrow left" onClick={previousImage}>
                {" "}
              </i>
            )}

            <img
              src={props.PhotosURL[count]}
              style={{ height: "180px", maxWidth: "400px" }}
              key={props.SerialNumber + count}
              alt={"valve "}
            />

            {props.PhotosURL.length === 1 ? null : (
              <i className="arrow right" onClick={nextImage}>
                {" "}
              </i>
            )}
          </div>

          <p> Manufacturer : {props.Make} </p>

          <p> Series : {props.Series} </p>
          <a href={props.Manual} target="_blank" rel="noopener noreferrer">
            {" "}
            Official Manual{" "}
          </a>
          <p> Valve size : {props.ValveSize} inches </p>
        </div>

        <div className="valve-health">
          <h4> Valve Health </h4>
          <p>
            Time since last maintenace :{props.TimeSinceLastMaintenance} days{" "}
          </p>
          {props.leaking ? (
            <p> Leak was detected : {props.TypeOfLeak} leak. </p>
          ) : (
            <p> No leak detected </p>
          )}
        </div>
      </div>
    </div>
    );
  };

  

  return (
    editable ?  <Editing /> : 
      
      <NotEditing />
  );


  
};

export default Valve;
