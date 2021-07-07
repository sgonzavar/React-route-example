import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

//components
import Users from "./components/Users";
import User from "./components/user";

function App() {
  return (
    <Fragment>
        <div className="container">
            <Router>
                <nav class="navbar navbar-dark bg-dark mb-5">
                  <div class="container">
                    <Link type="button" className="btn btn-outline-primary m-3" to="/">Usuarios</Link>
                  </div>
                </nav>            
                <Switch>
                  <Route exact path="/" component={Users} />                    
                  <Route path="/usuario/:id" component={User} />                    
                </Switch>
            </Router>
        </div>
    </Fragment>
  );
}

export default App;
