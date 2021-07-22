import React from "react";
import Helmet from "react-helmet"
import "./Homepage.css"
import Bg from "../../assets/images/offshore-platform.jpeg";

function Homepage(){
    const LearnMore = () =>{

        console.log("ContactUs")
    };

    return(
        <>
        <div style={{backgroundImage: `url(${Bg})`,
            height: "100vh",
            width:"100vw",

            
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
         }}>

            <Helmet>
                <style>{'body { background-color: #FAF9F6; height:100%; }'}</style>
            </Helmet>

            <p className="homepage-title"> <b>Where human minds and machines create synergies</b></p>
        
        
            <div className="homepage-box">

            <p className="savgen-asset-manager"> Savgen Asset Manager is our solution to 
            streamlining <b> access to information </b> in the industry </p>
            
            <button onClick={LearnMore} className="learn-more-button"> 
            Learn More
            </button>
            </div>
        
        
        </div>
        </>


    )
};

export default Homepage;