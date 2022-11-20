import ACTION_TYPES from "../ACTION_TYPES";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return [...state, action.payload];

    case ACTION_TYPES.REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload.id);

    case ACTION_TYPES.EDIT_TODO:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.todo = action.payload.todo;
        }
        return item;
      });

    case ACTION_TYPES.DONE:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.isDone = !item.isDone;
        }
        return item;
      });

    default:
      return state;
  }
}
