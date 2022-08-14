import React,{useState} from "react";

const Newproduct =() => {
    const[item, pickItem] = useState("");
    const[brand, pickBrand] = useState("");
    const[price, pickPrice] = useState("");
    const[model, pickModel] = useState("");
    const[message, updateMessage] =useState("");

    const save =() =>{
        var productDetails = {
            "item":item,
            "brand":brand,
            "price":price,
            "model":model
        };

        const postData = {
            method: "POST",
            headers : {"Content-Type" : "application/json"},
            body: JSON.stringify(productDetails)
        };

        fetch('http://localhost:1234/product', postData)
        .then(Response => Response.text())
        .then(serverResponse =>{
          
            updateMessage("Data Save Successfully !");
            pickItem("");
            pickBrand("");
            pickPrice("");
            pickModel("");
        })
            
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12">
                        <h3 className="text-center"> Enter Product Details </h3>
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
                            <button className="btn btn-primary" onClick={save}> Save Product </button>
                        </div>
                </div>
            </div>
        </div> 
    )
}

export default Newproduct;