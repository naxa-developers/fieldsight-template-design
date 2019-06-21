import React, { Component } from 'react';

import DashboardHeader from '../components/DashboardComponent/DashboardHeader';
import CustomMap from '../components/DashboardComponent/CustomMap';
import DashboardCounter from '../components/DashboardComponent/Dashboard_counter';
import About from '../components/DashboardComponent/AboutSection/About';
import ProjectManager from '../components/DashboardComponent/AboutSection/ProjectManager';

class OrgDashboard extends Component {
    
    render() {
        return (
            <React.Fragment>
                <main id="main-content">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="right-content no-bg new-dashboard">
                                <DashboardHeader />
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="card map">
                                            <div className="card-header main-card-header sub-card-header">
                                                <h5>Project maps</h5>
                                                <div className="dash-btn">
                                                    <a href={`#/`} className="fieldsight-btn left-icon"><i className="la la-map"></i> full map</a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <CustomMap />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card region-table">
                                            <div className="card-header main-card-header sub-card-header">
                                                <h5>Projects</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="thumb-list mr-0 " style={{position:'relative', height:'406px'}}>
                                                    <ProjectManager />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dashboard-counter mrt-30">
                                    <div className="row">
                                        <DashboardCounter />
                                    </div>
                                </div> 
                                <div className="about-section ">
                                    <div className="row">
                                        <div className="col-xl-8 col-md-6">
                                            <div className="card ">
                                                <div className="about" >
                                                    <div className="card-header main-card-header sub-card-header">
                                                        <h5>About</h5>
                                                    </div>
                                                    <div className="card-body about-body" style={{position:'relative', height:'358px'}}>
                                                        <About />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6">
                                            <div className="card mangager-list">
                                                <div className="card-header main-card-header sub-card-header">
                                                    <h5>Users</h5>
                                                    <div className="dash-btn">
                                                        <form className="floating-form">
                                                            <div className="form-group mr-0">
                                                                <input type="search" className="form-control" required/>
                                                                <label for="input">Search</label>
                                                                <i className="la la-search"></i>
                                                            </div>
                                                        </form>
                                                        <a href={`#/`} className="fieldsight-btn"><i className="la la-plus"></i></a>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="thumb-list mr-0 " style={{position:'relative', height:'312px'}}>
                                                    <ProjectManager />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default OrgDashboard;
