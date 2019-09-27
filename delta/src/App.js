import React from 'react';
import {Route, Switch, Link } from "react-router-dom";
import './App.css';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <ul style={{ listStyle:"none"}}>
            <li>
            <Link to="/" style={{display:"inline-block", listStyle:"none",marginRight:"0.5rem"}}>Signin</Link>
              <Link to="/SignUp">SignUp</Link>
              <Link to="/Dashboard" style={{display:"inline-block", listStyle:"none",marginRight:"0.5rem"}}>Dashboard</Link>
            </li>
            {/* <li>
              <Link to="/zillow-group">Zillow Group</Link>
            </li>
            <li>
              <Link to="/yahoo">Yahoo</Link>
            </li>
            <li>
              <Link to="/modus-create">Modus Create</Link>
            </li> */}
          </ul>
        </div>
      </div>
      <Switch>
                    
                    <Route path="/SignUp" component={SignUp}></Route>
                    <Route path="/Dashboard" component={Dashboard}></Route>
                    <Route path="/" component={Login}></Route>
                    {/* <Route exact path="/myform" render={props => <MyForm {...props} height={this.state.height}/>}></Route> */}
                  </Switch>
    </div>
  );
}

export default App;
