//in store.js and the createstore needs a reducer which we’ll make in ducks
import { createStore } from "redux"; //if using multiple reducers, combineReducers next to createStore
import counter from "./ducks/counter";

//the reducer part in () is from our file we make later. It will be named whatever
// const store = createStore(reducer);

export default createStore(counter);
