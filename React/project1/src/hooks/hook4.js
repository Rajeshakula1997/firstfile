import React from "react";
import Myhook5 from "./hook5";


const Myhook4 = () => {
    return(
        <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h3> React Component Intraction, Re-Use Example, Props</h3>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <Myhook5 fullname= "Ganesh"/>
                        <Myhook5 fullname="Raj Kumar"/>
                        <Myhook5 fullname="Madhu Kumar"/>
                        <Myhook5 fullname="Rajesh Chinna"/>
                        <Myhook5 fullname="Rajesh Chinna1"/>
                    </div>

        </div>
    )
}

export default Myhook4;