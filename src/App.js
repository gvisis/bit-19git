import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import students from "./data/students";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Sidebar students={students} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/student/:login" component={Main} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
