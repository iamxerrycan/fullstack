import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Switch>
          <Route exact path="/" Component={Home} />
          <Route exact path="/add" Component={AddEdit} />
          <Route exact path="/update/:id" Component={AddEdit} />
          <Route exact path="/view/:id" Component={View} />
          <Route exact path="/about" Component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
