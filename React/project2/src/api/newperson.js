import React,{useState} from "react";

const  Newperson=() => {
   
    const[name, pickName] = useState("");
    const[company, pickCompany] = useState("");
    const[city, pickCity] = useState("");
    const[state, pickState] = useState("");
    const[email, pickEmail] = useState("");
    const[message, updateMessage] =useState("");

    const save =() =>{
        var personDetails = {
            "name":name,
            "company":company,
            "city":city,
            "state":state,
            "email":email
        };

        const postData = {
            method: "POST",
            headers : {"Content-Type" : "application/json"},
            body: JSON.stringify(personDetails)
        };

        fetch('http://localhost:1234/client', postData)
        .then(Response => Response.text())
        .then(serverResponse =>{
          
            updateMessage("Data Save Successfully !");
            pickName("");
            pickCompany("");
            pickCity("");
            pickState("");
            pickEmail("");
        })
            
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <fieldset className="col-lg-6 offset-3">
                        <h3> Enter Person Details </h3>
                        <p> {message}</p>

                        <div className="mb-3">
                            <label> Enter Name: </label>
                            <input type="text" className="form-control" onChange={obj=>pickName(obj.target.value)}
                            value={name}/>
                        </div>

                        <div className="mb-3">
                            <label> Enter Company: </label>
                            <input type="text" className="form-control"onChange={obj=>pickCompany(obj.target.value)}
                             value={company}/>
                        </div>

                        <div className="mb-3">
                            <label> Select City: </label>
                            <select className="form-select" onChange={obj=>pickCity(obj.target.value)} value={city}>
                                    <option>Choose Code </option>
                                    <option>Chennai </option>
                                    <option>Bangalore </option>
                                    <option>Hyderabad </option>
                                    <option>Mumbai </option>
                                    <option>Delhi </option>
                                    <option>Kolkata </option>
                                    <option>Pune </option>
                                    <option>Lucknow </option>
                                    <option>Patna </option>
                                    <option>Jaipur </option>
                                    </select> 
                            
                            
                            
                             
                        </div>

                        <div className="mb-3">
                            <label> Select State: </label>
                            <select className="form-select" onChange={obj=>pickState(obj.target.value)} value={state}>
                                    <option>Choose Code </option>
                                    <option>Tamil Nadu </option>
                                    <option>Kerala </option>
                                    <option>Karnataka </option>
                                    <option>Andhra Pradesh </option>
                                    <option>Telangana </option>
                                    <option>Maharastra </option>
                                    <option>Gujarath </option>
                                    <option>Rajasthan </option>
                                    <option>Uttar Pradesh </option>
                                    <option>Bihar </option>
                                    </select> 
 
                        </div>

                        <div className="mb-3">
                            <label> Enter Email:</label>
                            <input type="text" className="form-control"onChange={obj=>pickEmail(obj.target.value)}
                             value={email}/>
                        </div>

                        <div className="text-center">
                            <button className="btn btn-primary" onClick={save}> Save Person </button>
                        </div>
                </fieldset>
            </div>
        </div> 
    )
}

export default Newperson;