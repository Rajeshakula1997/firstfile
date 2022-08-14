import React,{useState} from "react";

const Newuser =() => {
    const[name, pickName] = useState("");
    const[mobile, pickMobile] = useState("");
    const[city, pickCity] = useState("");
    const[message, updatMessage] =useState("");

    const save =() =>{
        var userDetails = {
            "name":name,
            "mobile":mobile,
            "city":city
        };

        const postData = {
            method: "POST",
            headers : {"Content-Type" : "application/json"},
            body: JSON.stringify(userDetails)
        };

        fetch('http://localhost:1234/user', postData)
        .then(Response => Response.text())
        .then(serverResponse =>{
          
            updatMessage("Data Save Successfully !");
            pickName("");
            pickMobile("");
            pickCity("");
        })
            
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 offset-3">
                        <h3> Enter User Details </h3>
                        <p> {message}</p>

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
                            <button className="btn btn-primary" onClick={save}> Save User </button>
                        </div>
                </div>
            </div>
        </div> 
    )
}

export default Newuser;