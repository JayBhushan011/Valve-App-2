import { useState, useEffect } from "react";
import axios from "axios";

const Authorize = () => {
    const [error, setError] = useState("");
    
    useEffect(() => {
      const fetchPrivateDate = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };
  
        try {
          await axios.get("/api/private", config);
        } catch (error) {
          localStorage.removeItem("authToken");
          setError("You are not authorized please login");
        }
      };
  
      fetchPrivateDate();
    }, []);
    return error ? (
        true
    ) : (
        false
    );
  };

export default Authorize;
