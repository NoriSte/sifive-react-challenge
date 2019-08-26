import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Main from "./Main";
import { loadData, store } from "./redux";

function App() {
  React.useEffect(() => {
    store.dispatch(loadData());
  }, []);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
