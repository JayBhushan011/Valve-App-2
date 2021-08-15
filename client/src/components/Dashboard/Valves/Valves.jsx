import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import "./Valves.css";
import axios from "axios";
import Helmet from "react-helmet";
import Valve from "./ValveComponent";
import ValveEditable from "./ValveEditable";
import AddValveForm from "./AddNewValve";
import Alert from "react-bootstrap/Alert";

const Valves = () => {
  let initialArray = [];
  const [privateData, setPrivateData] = useState(initialArray);
  const [error, setError] = useState("");
  const [addValve, setAddValve] = useState(false);
  const [valvesEditable, setValvesEditable] = useState(false);
  const [editValveAlert, setEditValveAlert] = useState(false);

  const handleClickForNewValve = () => {
    setAddValve(!addValve);
  };

  const handleEditValve = () => {
    setEditValveAlert(!editValveAlert);
  };

  const handleValveEditable = () => {
    setValvesEditable(true);
    setEditValveAlert(!editValveAlert);
  };

  function EditAlert() {
    return (
      <div style={{ marginTop: "2%", marginRight: "0.5%", width: "90%" }}>
        <Alert variant="danger">
          <Alert.Heading>Please read carefully!</Alert.Heading>
          <p>
            You are proceeding to edit valves. This can break your application
            if not done correctly.
          </p>
          <button
            style={{
              backgroundColor: "green",
              color: "white",
            }}
            onClick={handleEditValve}
          >
            {" "}
            No, I do NOT want to continue{" "}
          </button>
          <button
            style={{
              float: "right",
              backgroundColor: "red",
              color: "white",
            }}
            onClick={handleValveEditable}
          >
            {" "}
            Yes, I want to continue{" "}
          </button>
        </Alert>
      </div>
    );
  }

  function EditableBanner() {
    return (
      <>
        <div
          style={{
            position: "sticky",
            width: "90%",
            backgroundColor: "rgb(255, 0, 0,0.9)",
            top: "0",
            height: "50px",
            marginBottom: "10px",
          }}
        >
          <h3> Edit Mode </h3>
          <button
            onClick={() => setValvesEditable(false)}
            style={{
              position: "relative",
              left: "91.5%",
              bottom: "80%",
              height: "100%",
            }}
          >
            {" "}
            Exit Editing{" "}
          </button>
        </div>
      </>
    );
  }

  function EditButton() {
    return (
      <div className="admin-access-container">
        <button className="admin-button" onClick={handleEditValve}>
          {" "}
          Edit Access
        </button>
        {editValveAlert ? <EditAlert /> : null}
      </div>
    );
  }

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/valvedata/", config);
        if (privateData.length === 0) setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, [privateData]);
  return error ? (
    <div className="valve-container">
      <h1> {error} </h1>
      <Redirect to="/login" />
    </div>
  ) : (
    <div className="valve-container">
      <Helmet>
        <style>{"body { background-color: #FAF9F6; }"}</style>
      </Helmet>
      {valvesEditable ? <EditableBanner /> : null}
      <h1 className="title"> My Valves </h1>

      {!valvesEditable ? <EditButton /> : null}
      <>
        {privateData.arr && !valvesEditable
          ? privateData.arr.map((obj, i) => (
              <Valve
                className="valve-component"
                ValveType={obj.ValveType}
                SerialNumber={obj.SerialNumber}
                Make={obj.Make}
                Series={obj.Series}
                Manual={obj.Manual}
                ValveSize={obj.ValveSize}
                TimeSinceLastMaintenance={obj.TimeSinceLastMaintenance}
                leaking={obj.Leaking}
                TypeOfLeak={obj.TypeOfLeak}
                PhotosURL={obj.PhotosURL}
                ID={obj._id}
              />
            ))
          : null}
      </>

      <>
        {privateData.arr && valvesEditable
          ? privateData.arr.map((obj, i) => (
              <ValveEditable
                className="valve-component"
                ValveType={obj.ValveType}
                SerialNumber={obj.SerialNumber}
                Make={obj.Make}
                Series={obj.Series}
                Manual={obj.Manual}
                ValveSize={obj.ValveSize}
                TimeSinceLastMaintenance={obj.TimeSinceLastMaintenance}
                leaking={obj.Leaking}
                TypeOfLeak={obj.TypeOfLeak}
                PhotosURL={obj.PhotosURL}
                ID={obj._id}
              />
            ))
          : null}
      </>

      <div className="button-container">
        {!addValve ? (
          <>
            <AiOutlinePlus
              size={32}
              className="new-valve-button"
              onClick={handleClickForNewValve}
            />
            <i className="button-text" onClick={handleClickForNewValve}>
              {" "}
              Add New Valve{" "}
            </i>
          </>
        ) : (
          <>
            <VscClose
              size={32}
              className="new-valve-button"
              onClick={handleClickForNewValve}
            />
            <i className="button-text" onClick={handleClickForNewValve}>
              {" "}
              Close{" "}
            </i>
          </>
        )}

        {addValve ? <AddValveForm /> : null}
      </div>
    </div>
  );
};

export default Valves;
