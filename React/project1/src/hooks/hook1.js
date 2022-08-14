import React, {useState}from 'react';

const Myhook1 =() => {
          const citylist =["Bangalore", "Mumbai", "Pune", "chennai"];
          const[a, b, c, d] = citylist;       //array got de-structure

          // console.log( useState() );
          const[counter, updateCounter] = useState(100);
          const[totalclick, updateClick] = useState(0);
          const[mycity, updateCity] = useState(citylist);  // default value will be array


    const one = () =>{
       updateCounter( counter+20 );
       updateClick ( totalclick+1);
    }

    const two = () => {
        updateCounter( counter-20 );
        updateClick ( totalclick-1);
    }

    return(
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h3> useState() Simple Use</h3>
                    <h1>{a}, {b}, {c} </h1>
                    <h1> {counter} </h1>
                    <p> The total click are : {totalclick} </p>
                    <button className='btn btn-primary m-2' onClick={one}> Click to + By 20 </button>
                    <button className='btn btn-danger m-2' onClick={two}> Click to - By 20 </button>
                
                  <h3 className='mt-4'> City list from state array </h3>
                  {
                    mycity.map ((name, index)=>{
                        return(
                            <p key={index}>{index}. {name} </p>
                        )
                    })
                  } 
                
                </div>

            </div>

        </div>
    )
}


 export default Myhook1;