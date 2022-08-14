import React,{useState, useEffect} from "react";

const Myapi4 =() =>{
    const[car, updateCar] = useState([]);
    const getCar = () =>{
        fetch("https://firstenquiry.com/api/car.php")
        .then(Response => Response.json())
        .then(carList =>{
            updateCar(carList);
        })

    }

    useEffect(()=>{
            getCar();
    },[1]);


    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h3> Avaliable Cars : {car.length} </h3> </div>
                {
                    car.map((carinfo) =>{
                        return(
                            <div className="col-lg-2 mb-4">
                                <h5> {carinfo.model}</h5>
                                <img src={`https://firstenquiry.com/api/img/${carinfo.image}`}
                                 height="140"
                                  width="100%"/>
                                <p> Rs.{carinfo.price}</p>
                                <p> Engine - {carinfo.fuelType}</p>
                                <hr/>
                                </div> 
                        )
                    })
                }
               
                
            </div>
        </div>
    )
}
export default Myapi4;