import React from "react";
import {Link, useParams} from 'react-router-dom';

const Myapi3 =() => {
    const{name, age, city} = useParams();

    return(
        <div className="container mt-4">
            <div className="row">
                                    <div className="col-lg-4">
                                        <ul className="list-group">

                                            <li className="list-group-item active"> User List</li>
                                            <li className="list-group-item"> 
                                                    <Link to="/api3/Ganesh/Bangalore/30">Ganesh</Link> </li>

                                            <li className="list-group-item">  
                                                    <Link to="/api3/Ramesh/Hyderabad/25">Ramesh</Link> </li>

                                            <li className="list-group-item"> 
                                                    <Link to="/api3/Rajesh/chennai/20">Rajesh</Link> </li>

                                            <li className="list-group-item"> 
                                                    <Link to="/api3/Mahesh/Delhi/40">Mahesh</Link> </li>

                                            <li className="list-group-item"> 
                                                    <Link to="/api3/Mukhesh/Mumbai/10">Mukhesh</Link> </li>

                                            <li className="list-group-item"> 
                                                     <Link to="/api3/Suresh/Kolkota/15">Suresh</Link>  </li>

                                            <li className="list-group-item">  
                                                    <Link to="/api3/Mallesh/Lucknow/35">Mallesh</Link> </li>
                                            
                                        </ul>
                                    </div>

                <div className="col-lg-8">
                    <table className="table table-borderded">
                                    <thead>

                                        <tr>
                                            <th> Full Name </th>
                                            <td>{name}</td>
                                        </tr>

                                        <tr>
                                            <th> City </th>
                                            <td >{city}</td>
                                        </tr>

                                        <tr>
                                            <th> Age </th>
                                            <td>{age}</td>
                                        </tr>
                                        
                                    </thead>
                    </table>
                </div>
            </div>

            </div>
    )

}
export default Myapi3;