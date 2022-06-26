import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import reducers from "./reducers";
import store from "./store";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";

// const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Link to="/" exact="true">
          Home
        </Link>
        <Link to="/login">Login</Link>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
