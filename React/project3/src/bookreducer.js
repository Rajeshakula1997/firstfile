const BookList = (state=[], action) =>{
    var StateData = Object.assign([], state);  
    // to bring old values from state, default is empty array as []
    
    
    if (action.type=="new"){
        StateData.push( action.name );
    }

    if (action.type=="remove"){
        StateData.splice( action.bookindex, 1 );
    }

   return StateData;


}

 export default BookList;


 // action = {type:"new",  name :"JAVA"}