import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Clientlist = () => {


    const[client, updateClient] = useState([]);
    const getPerson=()=>{
        fetch("http://localhost:1234/client")
        .then(Response => Response.json())
        .then(clientArray =>{
            if(clientArray.length>0){
                updateClient(clientArray);
            }
        })
    }



    useEffect(() => {
        getPerson();
    },[1]);


    const deleteperson = (id) => {
        var url = "http://localhost:1234/client/" + id;
        axios.delete(url)
        .then(response => {
            getPerson();
        })
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">

                        <div className='card'>
                        <div className='card-header'> 
                        <h3 > Total Clients: {client.length}   ----  <Link to="/newperson"> Add Person </Link></h3> 
                         </div>
                         
                <div className="card-body">
                       
                        <div className="row ">       
                            {
                        client.map((clientlist, index) =>{
                            return(   
                                <fieldset className="col-lg-3 mt-2 text-center">
                            <div key={index} className="bg-dark text-white p-2 rounded m-2"> 
                            <h4 className="bg-primary"> Name :{clientlist.name} </h4>
                            <p>Client id : {clientlist.id}</p>
                            <p> Company : {clientlist.company}</p>
                            <p>   City : {clientlist.city}</p>
                            <p> State : {clientlist.state}</p>
                            <p> Email : {clientlist.email}</p>
                           

                            
                          <Link className='btn btn-warning mt-2 m-1 col-lg-3' to={`/editperson/${clientlist.id}`}>Edit </Link>
                            <button className='btn btn-danger mt-2 m-1 col-lg-5' onClick={deleteperson.bind(this, clientlist.id)}>Delete </button>
                            
                               </div>
                               </fieldset>
                            )
                        })
                   
                  
                         }
                                    
                            
                        
                    
                       
                         </div> 
                </div>
                           
                               
                        
            </div>
        </div>
        </div>
        </div>
    )
}

export default Clientlist;
