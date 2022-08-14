import React, { useState } from "react";

const Assignment=()=>{
    const [transportlist, updateTransport] = useState ([{number:"11", name:"abc", size:"Small", dname:"Rajesh", dmobile:9848}]);
    const[transportnumber, pickNumber] =useState("");
    const[transportname, pickName] =useState("");
    const[transportsize, pickSize] =useState("");
    const[transportdname, pickDname] =useState("");
    const[transportdmobile, pickDmobile] =useState("");
    const[message, updateMessage] =useState("");

    const save = () => {
        var transport = {number:transportnumber, name:transportname, size:transportsize, dname:transportdname, dmobile:transportdmobile};
        updateTransport(transportlist => [...transportlist, transport]);
        updateMessage(transportnumber + " Added Successfull !");
        pickNumber("");
        pickName("");
        pickSize("");
        pickDname("");
        pickDmobile("");

    }

    const deleteTrans = (index, tname) => {
        transportlist.splice(index, 1); 
        updateTransport(transportlist => [...transportlist] );
        updateMessage(tname + "  Deleted Successfully !");
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                <div className='card'>
                                                            <div className='card-header bg-primary text-white'> Add Book</div>

                                                            <div className='card-body'>
                                                                   <div className='mb-3'>
                                                                      <label> Transport Number</label>
                                                                      <input type="text" className="form-control" onChange={obj=>pickNumber(obj.target.value)}
                                                                         value={transportnumber} />
                                                                   </div>

                                                                   <div className='mb-3'>
                                                                      <label>Transport Name</label>
                                                                      <input type="number" className="form-control" onChange={obj=>pickName(obj.target.value)}
                                                                       value={transportname}/>
                                                                   </div>

                                                                   <div className='mb-3'>
                                                                      <label> Transport Size</label>
                                                                      <input type="number" className="form-control" onChange={obj=>pickSize(obj.target.value)}
                                                                       value={transportsize}/>
                                                                   </div>

                                                                   <div className='mb-3'>
                                                                      <label> Transport Driver</label>
                                                                      <input type="number" className="form-control" onChange={obj=>pickDname(obj.target.value)}
                                                                       value={transportdname}/>
                                                                   </div>

                                                                   <div className='mb-3'>
                                                                      <label> Transport Mobile No.</label>
                                                                      <input type="number" className="form-control" onChange={obj=>pickDmobile(obj.target.value)}
                                                                       value={transportdmobile}/>
                                                                   </div>
                                                            </div>

                                                            <div className='card-footer text-center'>
                                                                <button className='btn btn-primary' onClick={save}> Save BOOk </button>
                                                            </div>

                                                        </div>

                </div>

                                    <div className="col-lg-9">
                                        <h3 className="text-center"> Manage Transport {transportlist.length}</h3>
                                        <p className="text-center">{message}</p>
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>A1</th>
                                                <th>A2</th>
                                                <th>A3</th>
                                                <th>A4</th>
                                                <th>A5</th>
                                            </tr>
                                            </thead>
                                          <tbody>
                                             {
                                            transportlist.map((transport,index)=>{
                                                    return(
                                                        <tr key={index}>
                                                        <td>{index}</td>
                                                                <td > {transport.number}</td>
                                                                <td > {transport.name}</td>
                                                                <td > {transport.size}</td>
                                                                <td > {transport.dname}</td>
                                                                <td > {transport.dmobile}</td>
                                                                <td>
                                                                                   <button className='btn btn-danger btn-sm' 
                                                                                   onClick={deleteTrans.bind(this, index, transport.number)}>Remove</button>
                                                                            </td>
                                                                </tr>

                                                    )
                                            })
                                        }
                                        </tbody>                                            
                                        </table>
                                    </div>
            </div>
        </div>
    )

}
export default Assignment;