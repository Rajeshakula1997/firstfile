import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Userlist = () => {
    const [user, updateUser] = useState([]);
    const getUser = () => {
        fetch("http://localhost:1234/user")
            .then(Response => Response.json())
            .then(userArray => {
                if (userArray.length > 0) {
                    updateUser(userArray);
                }
            })
    }

    useEffect(() => {
        getUser();
    }, [1]);

    const deleteuser = (id) => {
        var url = "http://localhost:1234/user/" + id;
        axios.delete(url)
        .then(response => {
            getUser();
        })
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3 > Total Users : {user.length}   ----  <Link to="/newuser"> Add user </Link></h3>
                    <table className="table table-borderded shadow mt-3">
                        <thead>
                            <tr className="bg-light text-ptimary">
                                <th> User Id </th>
                                <th> Full name</th>
                                <th> Mobile </th>
                                <th>City</th>
                                <th>Edit</th>
                                <th> Delete </th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                user.map((userinfo, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{userinfo.id}</td>
                                            <td>{userinfo.name}</td>
                                            <td>{userinfo.mobile}</td>
                                            <td>{userinfo.city}</td>
                                            <td>
                                                <Link className="btn btn-warning btn-sm" to={`/edituser/${userinfo.id}`}>Edit </Link>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={deleteuser.bind(this, userinfo.id)}>Delete </button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Userlist;
