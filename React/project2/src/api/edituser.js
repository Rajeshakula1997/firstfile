
import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";     // useParams is use to capture the data from browser values


const Edituser =() => {
    const[name, pickName] = useState("");
    const[mobile, pickMobile] = useState("");
    const[city, pickCity] = useState("");
    const[message, updateMessage] =useState("");
    const{userid} = useParams();       // capture the data from userid


const getDetails =() =>{
    var url = "http://localhost:1234/user/"+userid;
    fetch(url)
    .then(Response => Response.json())
    .then(userinfo=>{
        pickName(userinfo.name);
        pickMobile(userinfo.mobile);
        pickCity(userinfo.city);
    })
}

 useEffect(() =>{
    getDetails();

 },[1]);


    const save =() =>{
        var userDetails = {
            "name":name,
            "mobile":mobile,
            "city":city
        };

        const postData = {
            method: "PUT",
            headers : {"Content-Type" : "application/json"},
            body: JSON.stringify(userDetails)
        };

        fetch('http://localhost:1234/user/'+userid, postData)
        .then(Response => Response.text())
        .then(serverResponse =>{
            updateMessage("Data Update Successfully !");
            window.location.href='#/userlist';
           // pickName("");
           // pickMobile("");
           // pickCity("");
        })
            
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 offset-3">
                        <h3>{userid} : Eidt User Details </h3>
                        <p>{message} </p>

                        <div className="mb-3">
                            <label> Enter Full Name </label>
                            <input type="text" className="form-control" onChange={obj=>pickName(obj.target.value)}
                            value={name}/>
                        </div>

                        <div className="mb-3">
                            <label> Mobile No.</label>
                            <input type="number" className="form-control"onChange={obj=>pickMobile(obj.target.value)}
                             value={mobile}/>
                        </div>

                        <div className="mb-3">
                            <label>City</label>
                            <input type="text" className="form-control"onChange={obj=>pickCity(obj.target.value)}
                             value={city}/>
                        </div>

                        <div className="text-center">
                            <button className="btn btn-primary" onClick={save}> Update User </button>
                        </div>
                </div>
            </div>
        </div> 
    )
}

export default Edituser;