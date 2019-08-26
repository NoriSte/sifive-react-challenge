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
      let modules = action.data && action.data.modules ? action.data.modules : state.modules;
      const newState = {
        ...state,
        error: false,
        loading: false,
        modules: modules.sort((a, b) => a.order - b.order)
      };
      return newState;
    default:
      return state;
  }
}

export const store = createStore(AJAXLoader, applyMiddleware(ReduxThunk));

// export const loadData = () => dispatch => {
//   dispatch("LOAD_START");
//   return fetch(
//     "https://sifivelearn-production.s3-us-west-1.amazonaws.com/samples/fe-developer.json"
//   )
//     .then(response => response.json)
//     .then(data => dispatch("LOAD_SUCCESS", { data }))
//     .catch(() => dispatch("LOAD_ERROR"));
// };

export function loadData() {
  // We can invert control here by returning a function - the "thunk".
  // When this function is passed to `dispatch`, the thunk middleware will intercept it,
  // and call it with `dispatch` and `getState` as arguments.
  // This gives the thunk function the ability to run some logic, and still interact with the store.
  return function(dispatch) {
    dispatch({ type: "LOAD_START" });
    return fetch(
      "https://sifivelearn-production.s3-us-west-1.amazonaws.com/samples/fe-developer.json"
    )
      .then(response => response.json())
      .then(data => dispatch({ type: "LOAD_SUCCESS", data }))
      .catch(() => dispatch({ type: "LOAD_ERROR" }));
  };
}
