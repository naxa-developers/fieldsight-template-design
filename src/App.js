import React, { Component } from 'react';
import {Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './css/line-awesome.min.css';
import './scss/style.scss';
import MyForm from './pages/myForm';
import MyformMain from './components/MyForm/MyformMain';
import Breadcrumb from './components/breadcrumb';
import ProjectDashboard from './pages/Project_Dashboard';
import SiteDashboard from './pages/SiteDashboard';
import OrgDashboard from './pages/OrgDashboard';
import SubmissionDetails from './pages/SubmissionDetails';
import SiteDocList from './pages/SiteDocList';
import UserProfile from './pages/UserProfile';
import YourTeam from './pages/YourTeam';
import Invitation from './pages/Invitation';
import Response from './pages/Response';
import ManageForms from './pages/ManageForms';
import ProjectManageSite from './pages/ProjectManageSite';
import Users from './pages/Users';
// import MousePointer from './components/MousePointer';




const csrf = "FasSURCaozAKo7OHtkIhiTtOag7hVBBt";
const token = "17ede4b52a21f1ec2b73525791750418113af4f1";

const setAuth = () => {
  axios.defaults.headers.common["X-CSRF-TOKEN"] = csrf;
  axios.defaults.headers.common["Authorization"] = token;
};

class App extends Component {
  state ={
    height:''
  }
    handleMouseMove =(event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }
  setHeight = () =>{
    return window.innerHeight
  }

  componentWillMount(){
    setAuth()
  }

  componentDidMount (){this.setState({height:window.innerHeight -173})}

  render() {

    return (
      <React.Fragment >
        
          <div id="fieldsight-new" className="fieldsight-new"  >
          {/* onMouseMove={this.handleMouseMove} */}
          {/* <MousePointer mouse={this.state} /> */}
            <div id="main-container" className="minified">
              <div className="container-fluid">

              <div className="card">
                   <div className="card-body">
                        <div className="routing-list">
                            <li><Link to="/pages/Project_Dashboard" >project-dashboard</Link></li>
                            <li><Link to="/pages/SiteDashboard" >Site Dashboard </Link></li>
                            <li><Link to="/pages/OrgDashboard" >Organization Dashboard</Link></li>
                            <li><Link to="/pages/SubmissionDetails" >Submission</Link></li>
                            <li><Link to="/pages/SiteDocList" >SiteDocList</Link></li>
                            <li><Link to="/pages/UserProfile" >UserProfile</Link></li>
                            <li><Link to="/pages/YourTeam" >YourTeam</Link></li>
                            <li><Link to="/pages/Invitation" >Invitation</Link></li>
                            <li><Link to="/pages/myForm" >myForm</Link></li>
                            <li><Link to="/pages/ProjectManageSite" >ProjectManageSite</Link></li>
                            <li><Link to="/pages/Users" >Users</Link></li>
                            <li><Link to="/pages/FormSubmission" >FormSubmission</Link></li>
                            <li><Link to="/pages/Response" >Response</Link></li>
                            <li><Link to="/pages/ManageForms" >ManageForms</Link></li>
                        </div>
                    </div> 
                </div>
                <Switch>
                    <Route path="/pages/Project_Dashboard" component={ProjectDashboard}></Route>
                    <Route path="/pages/SiteDashboard" component={SiteDashboard}></Route>
                    <Route path="/pages/OrgDashboard" component={OrgDashboard}></Route>
                    <Route path="/pages/SubmissionDetails" render={props => <SubmissionDetails {...props} height={this.state.height}/>}></Route>
                    <Route path="/pages/SiteDocList" render={props => <SiteDocList {...props} height={this.state.height}/>}></Route>
                    <Route path="/pages/UserProfile" render={props => <UserProfile {...props} height={this.state.height}/>}></Route>
                    <Route path="/pages/YourTeam" render={props => <YourTeam {...props} height={this.state.height}/>}></Route>
                    <Route path="/pages/Invitation" render={props => <Invitation {...props} height={this.state.height}/>}></Route>
                    <Route path="/pages/Users" component={Users}></Route>
                    <Route path="/pages/FormSubmission" component={SubmissionDetails}></Route>
                    <Route path="/pages/ProjectManageSite" component={ProjectManageSite}></Route>
                    <Route path="/pages/Response" component={Response}></Route>
                    <Route path="/pages/ManageForms" component={ManageForms}></Route>
                    <Route path="/" render={props => <MyformMain {...props} height={this.state.height}/>}></Route>
                    {/* <Route exact path="/myform" render={props => <MyForm {...props} height={this.state.height}/>}></Route> */}
                  </Switch>
              </div>
            </div>
          </div>

      </React.Fragment>
    );
  }
}

export default App;
