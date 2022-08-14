import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";


const Book = () =>{
     const allbook = useSelector(state=>state.BookList);
     const dispatch = useDispatch();
     const save = () =>{
          dispatch( {type:"new", name:"Test Book"} );          
     }


     return(
          <div className="container mt-4">
               <div className="row">
                    <div className="col-lg-6 offset-3">
                         <h4> Book Management  - {allbook.length} </h4>
                         <p> Enter Book Name 
                              <input type="text" className="m-3" />
                              <button className="btn btn-primary"
                              onClick={save}> Save Book </button>
                         </p>
                         <table className="table table-bordered shadow">
                             <thead>
                                   <tr className="bg-light text-primary">
                                        <th>Sl No</th>
                                        <th>Book Name </th>
                                        <th>Action</th>
                                   </tr>
                              </thead>
                              <tbody>
                              
                              </tbody> 
                         </table> 
                    </div>
               </div>
          </div>
     )
}

export default Book;