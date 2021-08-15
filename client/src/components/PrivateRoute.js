import { Redirect, Route } from "react-router-dom";
import Authorize from "./Authorize";



const PrivateRoute = ({ component: Component, ...rest }) => {
  
  const authorize =  Authorize();
  return (
    <Route
      {...rest}
      render={(props) =>
         authorize
          ? (
          <>
          <Component {...props}  />
          </>  
          
        ) : (
          
          <>
          
          <Redirect to="/login"  />
          </>
        )
      }
    />
  );


};

export default PrivateRoute;

