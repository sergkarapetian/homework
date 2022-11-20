import { createStore } from "redux";
import reducer from "../components/Reducer";

const initialState = [
  {todo: "Todo List With Redux, where you can", isDone: false, id: 1661957481811},
  { todo: "Add Todo", isDone: false, id: 1661957481812 },
  { todo: "Delete Todo", isDone: false, id: 1661957481813 },
  { todo: "Edit Todo", isDone: false, id: 1661957481814 },
  { todo: "Save Changes", isDone: false, id: 1661957481815 },
  { todo: "Reset Changes", isDone: false, id: 1661957481816 },
  { todo: "Mark As Done", isDone: false, id: 1661957481817 },
  { todo: "Select Show All", isDone: false, id: 1661957481818 },
  { todo: "Active", isDone: false, id: 1661957481819 },
  { todo: "Done", isDone: false, id: 1661957481820 },
];

const store = createStore(reducer, initialState);

export default store;
