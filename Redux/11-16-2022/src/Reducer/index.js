import ACTION_TYPES from "../ACTION_TYPES";

export default function reducer(state, action) {
  const { value } = state;
  
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return {
        value: value + 1,
      };

    case ACTION_TYPES.DECREMENT:
      return {
        value: value - 1,
      };

    default:
      return state;
  }
}
