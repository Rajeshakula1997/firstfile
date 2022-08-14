import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


const Booklist =() => {

    const[book, updateBook] = useState([]);
    const getBook=() =>{
        fetch("http://localhost:1234/book")
        .then(Response => Response.json())
        .then(bookArray => {
            if(bookArray.length > 0) {
                updateBook(bookArray);
            }
        })
    }

    useEffect(() => {
        getBook();
    },[1]);

    const deletebook = (id) => {
        var url = "http://localhost:1234/book/" +id;
        axios.delete(url)
        .then(response => {
            getBook();
        })
    }

 return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-lg-12">
              
                <h3 className="text-center m-2"> Total Books : {book.length} -- <Link to="/newbook"> Add Book </Link> </h3> 
                  <table className="table table-borderded table-striped  mt-4">
                      <thead>
                    <tr>
                        <th>Book Id  </th>
                        <th> Book Title </th>
                        <th> Book Author </th>
                        <th> Book Edition </th>
                        <th> Book Price </th>
                      
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                            </thead>
                            <tbody>
                                {
                                    book.map((bookinfo, index) =>{
                                        return(
                                            <tr key={index}>
                                                <td>{bookinfo.id}</td>
                                                <td>{bookinfo.title}</td>
                                                <td>{bookinfo.author}</td>
                                                <td>{bookinfo.edition}</td>
                                                <td>{bookinfo.price}</td>
                                               
                                                <td>
                                            <Link className="btn btn-warning btn-sm" to={`/editbook/${bookinfo.id}`}>Edit </Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={deletebook.bind(this, bookinfo.id)}>Delete </button>
                                        </td>
                                            </tr>
                                        )
                                    } )
                                }
                            </tbody>
                </table>
            </div>
        </div>
        
    </div>
 )
}
export default Booklist;