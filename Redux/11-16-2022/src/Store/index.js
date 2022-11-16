import { createStore } from "redux";
import reducer from "../Reducer";
import state from "../State";

const store = createStore(reducer, state);

export default store;
