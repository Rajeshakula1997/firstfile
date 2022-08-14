import React,{useEffect, useState} from "react";
import PublicHeader from "./header";


const Myhome = () =>{
    const[product, updateProduct] = useState([]);

    const getProduct = () => {
        fetch('http://localhost:1234/productlist')
        .then(Response => Response.json())
        .then(allproduct =>{
            if(allproduct.length >0){
                updateProduct(allproduct);
            }
        })
    }

    useEffect (() =>{
        getProduct();
    },[true]);

    const [message, updateMessage]= useState("");
    const Addtocart = (productinfo)=> {
      const postData = {
        method:'POST',
        headers:{ 'Content-Type' : 'application/json' },
        body: JSON.stringify(productinfo)
      };

       var url = "http://localhost:1234/cart";
       fetch(url, postData)
       .then(Response=> Response.json())
       .then(serverResponse=>{
        updateMessage(serverResponse.name+"Added In Cart");

       })
    }


    return(
     <>
        <PublicHeader/>
        <section className="bg-light p-5">
                   <p className="text-center text-danger">{message}</p>
            <div className="container">
                <div className="row">

                                {
                                    product.map((pdata, index)=>{
                                        return(

                                    <div className="col-lg-3 mb-5" key={index}>
                                        <div className="bg-white rounded p-3 text-center">
                                            <h4> {pdata.name} </h4>
                                            <img src={pdata.photo} className="img-fluid" width="50%"/>
                                            <p>{pdata.details} </p>
                                            <p> {pdata.price}/-</p>
                                            <div className="text-center">
                                                <button className="btn btn-danger btn-sm" 
                                                                        onClick={Addtocart.bind(this, pdata)}>
                                                    <i className="fa fa-shopping-cart"></i>Add to Cart
                                                    
                                                </button>
                                            </div>
                                        </div>
                                     </div>

                                     )  
                                    })
                                }

                </div>
            </div>
        </section>
       </>
    )

}

export default Myhome;