import React from "react";
import Alert from "react-bootstrap/Alert";

function EditAccess(props) {
  const css = { marginTop: "2%", marginRight: "0.5%", width: "90%" };
  const handleClose = () => {
    console.log(props.alertState);
  };
  return (
    <div style={css}>
      <Alert variant="danger" onClose={handleClose} dismissible>
        <Alert.Heading>Please read carefully!</Alert.Heading>
        <p>
          You are proceeding to edit valves. This can break your application if
          not done correctly.
        </p>
      </Alert>
    </div>
  );
}

export default EditAccess;
