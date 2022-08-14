import React, {useState} from 'react';

     const Assign = () => {
        const[translist, updateTrans] = useState([ {numb : "111", type : "small", route : 10, driver:"abcd", mobile:984800} ]);
        const[transnumb, pickNumb]= useState("");
        const [transtype, pickType]= useState("");
        const [transroute, pickRoute]= useState("");
        const [transdriver, pickDriver]= useState("");
        const [transmobile, pickMobile]= useState("");
       
        const [message, updateMessage]= useState("");

        const save =()=>{
          var newtransport = {numb: transnumb, type:transtype, route:transroute, driver:transdriver, mobile:transmobile};
          updateTrans(translist=>[...translist, newtransport]);
          updateMessage(transnumb + " Added Successfully !");
          pickNumb("");
          pickType("");
          pickRoute("");
          pickDriver("");
          pickMobile("");

        }


        const deleteTrans = (index, tname) => {
          translist.splice(index, 1);    // a - b;
          // a= a-b;
          updateTrans(translist => [...translist] );   // a= a assigning the remining element to state variable
          updateMessage(tname + "  Deleted Successfully !");
      }


       
      return (
        <div className='container'>
              <div className='row'>
                                                <div className='col-lg-3 mt-5'>
                                                 
                                                        <div className='card'>
                                                            <div className='card-header bg-danger text-white p-3'> New Transport </div>

                                                            <div className='card-body'>
                                                                   <div className='mb-3'>
                                                                      <label> TransportNumber </label>
                                                                      <input type="text" className="form-control" onChange={obj=>pickNumb(obj.target.value)}
                                                                          value={transnumb}/>
                                                                   </div>

                                                                   <div className='mb-3'>
                                                                      <label> Root Name </label>
                                                                      <input type="text" className="form-control" onChange={obj=>pickType(obj.target.value)}
                                                                       value={transtype}/>
                                                                   </div>

                                                                   <div className='mb-3'>
                                                                      <label> Size </label>
                                                                      <input type="text" className="form-select"  onChange={obj=>pickRoute(obj.target.value)}
                                                                       value={transroute}/>
                                                                   </div>

                                                                   <div className='mb-3'>
                                                                      <label> Drive Name </label>
                                                                      <input type="text" className="form-control" onChange={obj=>pickDriver(obj.target.value)}
                                                                       value={transdriver}/>
                                                                   </div>

                                                                   <div className='mb-3'>
                                                                      <label> Drive Mobile No.</label>
                                                                      <input type="number" className="form-control" onChange={obj=>pickMobile(obj.target.value)}
                                                                       value={transmobile}/>
                                                                   </div>

                                                                   <div className='mb-3 text-center'>
                                                                <button className='btn btn-primary col-lg-12' onClick={save}> Save Book </button>
                                                            </div>

                                                            </div>

                                                           

                                                        </div>
                                                </div>



                                                
                     <div className='col-lg-9 mt-5'>
                            <h3> Manage Transport : {translist.length} </h3>
                            

                                            <table className='table table-bordered shadow'>
                                                        <thead>
                                                            <tr className='bg-light text-primary'>
                                                                <th> T-id </th>
                                                                <th> T-Number </th>
                                                                <th> Size </th>
                                                                <th> Transport Route </th>
                                                                <th> Driver </th>
                                                                <th> Mobile No. </th>
                                                                <th> Action </th>


                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                             {
                                                                  translist.map((trans, index) =>{
                                                                    return(
                                                                         <tr key={index}>
                                                                                 <td>{index}</td>
                                                                                 <td>{trans.numb}</td>
                                                                                 <td>{trans.type}</td>
                                                                                 <td>{trans.route}</td>
                                                                                 <td>{trans.driver}</td>
                                                                                 <td>{trans.mobile}</td>

                                                                            <td>
                                                                                   <button className='btn btn-danger btn-sm' 
                                                                                   onClick={deleteTrans.bind(this, index, trans.numb)}>Remove</button>
                                                                            </td>
                                                                         </tr>
                                                                    )
                                                                  })
                                                             }
                                                        </tbody>
                                                            </table>
                                                            <p className='text-center'>{message}</p>
                           
                     </div>
                  
              </div>

        </div>
      )
    
    
    }

    export default Assign;