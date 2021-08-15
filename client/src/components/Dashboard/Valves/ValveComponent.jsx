import { useState } from "react";

function Valve(props) {
  //props.ID is the ID of each valve
  const [count, setCount] = useState(0);

  function nextImage() {
    let limit = props.PhotosURL.length;
    setCount((prevCount) => (prevCount + 1) % limit);
  }
  function previousImage() {
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }
  return (
    <div className={props.className}>
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
        {props.ValveEditable ? <button> Edit </button> : null}
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
}

export default Valve;
