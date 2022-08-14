import { combineReducers } from "redux";
import BookList from "./bookreducer";
import UserList from "./userreducer";


const Mainreducer = combineReducers(
    {
    BookList, UserList
    }
);

export default Mainreducer;