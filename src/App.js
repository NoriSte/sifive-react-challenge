import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Modules from "./Modules";
import { loadData, store } from "./redux";

function App() {
  React.useEffect(() => {
    store.dispatch(loadData());
  }, []);

  return (
    <Provider store={store}>
      <Modules />
    </Provider>
  );
}

export default App;
