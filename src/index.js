import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import style from "./index.styl";
import App from './containers/app';
import rootReducer from "./redux/reducers/reducer";

 const store = createStore(rootReducer);

 ReactDOM.render(
   <Provider store={store}>
    <App />
  </Provider>, 
document.querySelector('#app'));