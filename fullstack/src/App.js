import React from "react";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddUpdate from "./pages/AddUpdate";
import View from "./pages/View";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <ToastContainer position="top-center"/>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/add" Component={AddUpdate} />
          <Route exact path="/update/:id" Component={AddUpdate} />
          <Route exact path="/view/:id" Component={View} />
          <Route exact path="/about" Component={About} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
