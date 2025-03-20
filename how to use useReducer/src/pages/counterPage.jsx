import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const UPDATE_VALUE = "update-value";
const ADD_VALUE = "add-value";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case UPDATE_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case ADD_VALUE:
      return {
        ...state,
        count: state.count + state.value,
        value: 0,
      };
    default:
      return state;
      throw new Error("unexpected action: ", action.type);
  }
};
const CounterPage = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, value: 0 });
  const addButton = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const minusButton = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: UPDATE_VALUE,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE,
    });
    console.log(state);
  };
  return (
    <Panel className="m-3">
      <div className="text-lg">{state.count}</div>
      <div className="flex flex-row">
        <Button onClick={addButton} primary>
          Add Increment
        </Button>
        <Button onClick={minusButton} danger>
          Reduce Increment
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="label">Add a lot</label>
        <input
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          type="number"
          value={state.value || ""}
          onChange={handleChange}
        />
        <Button>ADD IT</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
