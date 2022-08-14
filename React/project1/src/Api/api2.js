import React,{useState, useEffect} from "react";

const Api2 = () => {
    const [carlist, updateList] = useState([]);
    const getCar =() => {
        fetch("https://firstenquiry.com/api/car.php")
        .then(respond => respond.json())
        .then(carArray =>{
            if (carArray.length>0){
                updateList(carArray);
            }
        })
    }


    useEffect(() => {
        getCar();
      

    }, [1]);
    
    return(
        <div className="container mt-12">
             <div className="row">
                        <div className="col-lg-12 text-center">
                            <h3 className="col-lg-12 mt-2"> Car's List : {carlist.length} </h3>
                        </div>
            </div>
            <hr/>
                    <div className="row ">       
                            {
                        carlist.map((car, index) =>{
                            return(   
                                <fieldset className="col-lg-3 mt-2 text-center">
                            <p key={index} className="bg-secondary p-2 rounded">
                                 
                            <h5 className="bg-info p-1"> Car Model :{car.model} </h5>
                            <img src={`https://firstenquiry.com/api/img/${car.image}`} height="140"></img>
                            <h5 className="text-danger"> Price : {car.price}</h5>
                            <p className="text-white">  Version : {car.version}</p>
                            <p className="text-white"> FuelType : {car.fuelType}</p>
                            <p className="text-white"> Mileage : {car.mileage}</p>
                            <p className="text-white"> Category : {car.category.vechicleType}</p>
                           
                            <button className='btn btn-primary'>View More Details </button>
                            </p>
                            </fieldset>
                            )
                        })
                    }
                   </div> 
         </div>
    )
}

export default Api2;