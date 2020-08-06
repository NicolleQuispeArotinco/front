import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Personal from "./features/personal/Personal";
import EmployeeDetail from "./features/personal/EmployeeDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Personal />
          </Route>
          <Route exact path="/employee/:id" component={EmployeeDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
