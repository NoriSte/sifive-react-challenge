import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk"; // no changes here 😀

const initialState = {
  loading: false,
  error: false,
  modules: []
};

function AJAXLoader(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "LOAD_START":
      return {
        ...state,
        loading: true
      };
    case "LOAD_ERROR":
      return {
        ...state,
        error: true,
        loading: false
      };
    case "LOAD_SUCCESS":
      return {
        ...state,
        error: false,
        loading: false,
        modules: action.data && action.data.modules ? action.data.modules : state.modules
      };
    default:
      return state;
  }
}

export const store = createStore(AJAXLoader, applyMiddleware(ReduxThunk));

export const loadData = () => dispatch => {
  dispatch({ type: "LOAD_START" });
  return fetch(
    "https://sifivelearn-production.s3-us-west-1.amazonaws.com/samples/fe-developer.json"
  )
    .then(response => response.json())
    .then(data => dispatch({ type: "LOAD_SUCCESS", data }))
    .catch(() => dispatch({ type: "LOAD_ERROR" }));
};
