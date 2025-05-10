import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";


import { store, persistor } from './redux/store/Store';

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
