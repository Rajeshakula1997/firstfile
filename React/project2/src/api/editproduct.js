import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const Editproduct =() => {
    const[item, pickItem] = useState("");
    const[brand, pickBrand] = useState("");
    const[price, pickPrice] = useState("");
    const[model, pickModel] = useState("");
    const[message, updateMessage] =useState("");
    const{productid} = useParams();

    const getProduct=()=>{
        var url = "http://localhost:1234/product/"+productid;
        fetch(url)
        .then(Response => Response.json())
        .then(productinfo=>{
            pickItem(productinfo.item);
            pickBrand(productinfo.brand);
            pickPrice(productinfo.price);
            pickModel(productinfo.model);
            
        })
    }

    useEffect(()=>{
        getProduct();
    },[1]);


    const save =() =>{
        var productDetails = {
            "item":item,
            "brand":brand,
            "price":price,
            "model":model
        };

        const postData = {
            method: "PUT",
            headers : {"Content-Type" : "application/json"},
            body: JSON.stringify(productDetails)
        };

        fetch('http://localhost:1234/product/'+productid, postData)
        .then(Response => Response.text())
        .then(serverResponse =>{
          
            updateMessage("Data Update Successfully !");
            window.location.href='#/productlist';
            //pickItem("");
            //pickBrand("");
            //pickPrice("");
            //pickModel("");
        })
            
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12">
                        <h3 className="text-center"> {productid} : Edit Product Details </h3>
                        <p>{message}</p>

<div className="row mt-4">
                        <div className="col-lg-3 mb-2">
                            <h5><b> Select Item: </b></h5>
                            <input type="text" className="form-control" onChange={obj=>pickItem(obj.target.value)}
                            value={item} placeholder="Select your Item"/>
                        </div>

                        <div className="col-lg-3 mb-2">
                            <h5><b> Brand Name:  </b></h5>
                            <input type="text" className="form-control"onChange={obj=>pickBrand(obj.target.value)}
                             value={brand} placeholder="Select your item Brand"/>
                        </div>

                        <div className="col-lg-3 mb-2">
                            <h5><b>Price:  </b></h5>
                            <input type="number" className="form-control"onChange={obj=>pickPrice(obj.target.value)}
                             value={price} placeholder="Enter your Service cost"/>
                        </div>

                        <div className="col-lg-3 mb-2">
                            <h5><b> Model:  </b></h5>
                            <input type="text" className="form-control"onChange={obj=>pickModel(obj.target.value)}
                             value={model} placeholder="Select Model"/>
                        </div>
                        </div>

                        <div className="text-center"><br/>
                            <button className="btn btn-primary" onClick={save}> Update Product </button>
                        </div>
                </div>
            </div>
        </div> 
    )
}

export default Editproduct;