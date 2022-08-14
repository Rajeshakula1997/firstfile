import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Productlist = () => {

    const[product, updateProduct] = useState([]);
    const getProduct=()=>{
        fetch("http://localhost:1234/product")
        .then(Response => Response.json())
        .then(productArray =>{
            if(productArray.length>0){
                updateProduct(productArray);
            }
        })
    }



    useEffect(() => {
        getProduct();
    },[1]);


    const deleteproduct = (id) => {
        var url = "http://localhost:1234/product/" + id;
        axios.delete(url)
        .then(response => {
            getProduct();
        })
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                   
                   

                        <div className='card'>
                        <div className='card-header'> 
                        <h3 > Total Products: {product.length}   ----  <Link to="/newproduct"> Add product </Link></h3> 
                         </div>
                         
                <div className="card-body">
                       
                        <div className="row ">       
                            {
                        product.map((productinfo, index) =>{
                            return(   
                                <fieldset className="col-lg-3 mt-2 text-center">
                            <div key={index} className="bg-info p-2 rounded"> 
                            <h5> Item :{productinfo.item} </h5>
                            <p> Id : {productinfo.id} </p>
                            <p> Brand : {productinfo.brand}</p>
                            <p>   Price : {productinfo.price}</p>
                            <p> Model : {productinfo.model}</p>
                            </div>

                            
                          
                            <button className='btn btn-primary mt-2 m-1 col-lg-5' onClick={deleteproduct.bind(this, productinfo.id)}>Delete </button>
                            <Link className="btn btn-warning btn-sm" to={`/editproduct/${productinfo.id}`}>Edit </Link>
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

export default Productlist;
