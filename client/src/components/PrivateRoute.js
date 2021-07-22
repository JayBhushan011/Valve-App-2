import { Redirect, Route } from "react-router-dom";
import Authorize from "./Authorize";



const PrivateRoute = ({ component: Component, ...rest }) => {
  let authorize = Authorize();
  return (
    <Route
      {...rest}
      render={(props) =>
        authorize
          ? (
          
          <Redirect to="/login" />
          
        ) : (
          <Component {...props} />
        )
      }
    />
  );


};

export default PrivateRoute;

