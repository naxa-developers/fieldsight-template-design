import React, { Component } from 'react';
import {Route, Switch, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './css/line-awesome.min.css';
import './scss/style.scss';
import Breadcrumb from './components/breadcrumb';
import ProjectDashboard from './pages/Project_Dashboard';
import SiteDashboard from './pages/SiteDashboard';
import OrgDashboard from './pages/OrgDashboard';
import SubmissionDetails from './pages/SubmissionDetails';
import SiteDocList from './pages/SiteDocList';
import UserProfile from './pages/UserProfile';
import YourTeam from './pages/YourTeam';
import Invitation from './pages/Invitation';
import MyForm from './pages/myForm';



class App extends Component {
  state ={
    height:''
  }
  
  setHeight = () =>{
    return window.innerHeight
  }
  

  componentDidMount (){this.setState({height:window.innerHeight -173})}

  render() {
    
    return (
      <React.Fragment>
        
          <div id="fieldsight-new" className="fieldsight-new">
            <div id="main-container" className="minified">
              <div className="container-fluid">
              
              <div className="card">
                    <div className="card-body">
                        <div className="routing-list">
                            <li><Link to="/" >project-dashboard</Link></li>
                            <li><Link to="/pages/SiteDashboard" >Site Dashboard </Link></li>
                            <li><Link to="/pages/OrgDashboard" >Organization Dashboard</Link></li>
                            <li><Link to="/pages/SubmissionDetails" >Submission</Link></li>
                            <li><Link to="/pages/SiteDocList" >SiteDocList</Link></li>
                            <li><Link to="/pages/UserProfile" >UserProfile</Link></li>
                            <li><Link to="/pages/YourTeam" >YourTeam</Link></li>
                            <li><Link to="/pages/Invitation" >Invitation</Link></li>
                            <li><Link to="/pages/myForm" >myForm</Link></li>
                        </div>
                    </div>
                </div>
                <Breadcrumb />
                <Switch>
                      <Route path="/pages/SiteDashboard" component={SiteDashboard}></Route>
                      <Route path="/pages/OrgDashboard" component={OrgDashboard}></Route>
                      <Route path="/pages/SubmissionDetails" render={props => <SubmissionDetails {...props} height={this.state.height}/>}></Route>
                      <Route path="/pages/SiteDocList" render={props => <SiteDocList {...props} height={this.state.height}/>}></Route>
                      <Route path="/pages/UserProfile" render={props => <UserProfile {...props} height={this.state.height}/>}></Route>
                      <Route path="/pages/YourTeam" render={props => <YourTeam {...props} height={this.state.height}/>}></Route>
                      <Route path="/pages/Invitation" render={props => <Invitation {...props} height={this.state.height}/>}></Route>
                      <Route path="/pages/myForm" render={props => <MyForm {...props} height={this.state.height}/>}></Route>
                      <Route path="/" component={ProjectDashboard}></Route>
                  </Switch>
              </div>
            </div>
          </div>
        
      </React.Fragment>
    );
  }
}

export default App;
