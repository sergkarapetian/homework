import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import ACTION_TYPES from "./ACTION_TYPES";

function App() {

  const stateValue = useSelector(function (state) {
    return state.value;
  });

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{stateValue}</h1>
      <button
        onClick={() =>
          dispatch({ type: ACTION_TYPES.INCREMENT})
        }
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTION_TYPES.DECREMENT})
        }
      >
        -
      </button>
    </div>
  );
}

export default App;
