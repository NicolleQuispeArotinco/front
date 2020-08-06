import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Personal from "./features/personal/Personal";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Personal />
          </Route>
          <Route exact path="/employee/:id" component={Personal} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
