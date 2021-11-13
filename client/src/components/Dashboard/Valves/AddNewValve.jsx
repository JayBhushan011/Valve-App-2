import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { ValveTypes, ValveManufacturers } from "./DataValidator";

function AddValveForm() {
  const [type, setType] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [series, setSeries] = useState("");

  function Series(manufacturer) {
    let Options;
    switch (String(manufacturer.name)) {
      case "Cameron":
        Options = (
          <>
            <option value="T30">T30</option>
            <option value="Shale">Shale</option>
            <option value="Multiorifice Valves (MOVs)">
              Multiorifice Valves (MOVs)
            </option>
          </>
        );
        break;
      case "Audco":
        Options = (
          <>
            <option value="Audco Lubricated Plug Valves">
              Audco Lubricated Plug Valves
            </option>
            <option value="Vogt Valves">Vogt Valves</option>
          </>
        );
        break;
      case "L&T":
        Options = (
          <>
            <option value="Trunnion-mounted Ball Valves">
              {" "}
              Trunnion-mounted Ball Valves
            </option>
            <option value="Floating Ball Valves"> Floating Ball Valves </option>
          </>
        );
        break;

      default:
        Options = (
          <>
            <option value="Cameron">Cameron</option>
            <option value="Audco">Audco</option>
            <option value="L&T">L&T</option>
          </>
        );
    }
    return Options;
  }
  function handleSubmit() {
    // const postData = async () => {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    //     },
    //   };
    //   try {
    //   } catch (error) {}
    // };
  }

  return (
    <div>
      <div className="add-valve-container">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicSelect">
            {/* VALVE TYPES -- BALL, PLUG, GATE etc. 
            Changes to be made -
              *Should be of the form -- for (typesOfVales) in allValvesModel:
                                        <option value={type}> {type}</option>
            */}
            <Form.Label> Select Valve Type </Form.Label>
            <Form.Control
              as="select"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              {ValveTypes.map((x) => (
                <option value={x.Name}> {x.Name}</option>
              ))}
            </Form.Control>
          </Form.Group>

          {/* SERIAL NUMBER, TO BE SENT*/}
          <Form.Group
            style={{ marginTop: "20px" }}
            as={Row}
            className="mb-3"
            controlId="formHorizontalEmail"
          >
            <Form.Label column sm={2}>
              Enter Serial Number
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder=" Serial No. " />
            </Col>
          </Form.Group>

          {/* MANUFACTURER AND SERIES DROPDOWNS, NEED TO BE AUTOPOPULATED USING ALLVALVES DATABASE*/}
          <Row>
            <Col md>
              <Form.Group controlId="formBasicSelect">
                <Form.Label> Select Manufacturer </Form.Label>
                <Form.Control
                  as="select"
                  value={manufacturer}
                  onChange={(e) => {
                    setManufacturer(e.target.value);
                  }}
                >
                  <option value="Cameron">Cameron</option>
                  <option value="Audco">Audco</option>
                  <option value="L&T">L&T</option>
                  <option value="Fisher (Emerson) ">Fisher (Emerson)</option>
                  <option value="Other">Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId="formBasicSelect">
                <Form.Label> Select Series </Form.Label>
                <Form.Control
                  as="select"
                  value={series}
                  onChange={(e) => {
                    setSeries(e.target.value);
                  }}
                >
                  <Series name={manufacturer} />
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <button className="add-valve-button" type="submit">
                {" "}
                Submit{" "}
              </button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default AddValveForm;
