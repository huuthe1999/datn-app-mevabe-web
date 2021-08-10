// libs
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// components
import Main from "./Main";
// others
import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);

export default App;
