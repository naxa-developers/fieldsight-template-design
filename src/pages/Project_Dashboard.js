import React, { Component } from 'react';

import DashboardHeader from '../components/DashboardComponent/DashboardHeader';
import DatatablePage from '../components/DashboardComponent/DatatablePage';
import CustomMap from '../components/DashboardComponent/CustomMap';
import BgCounter from '../components/DashboardComponent/Bg_counter';
import DashboardCounter from '../components/DashboardComponent/Dashboard_counter';
import SubmissionChart from '../components/DashboardComponent/SubmissionChart';
import ProgressChart from '../components/DashboardComponent/ProgressChart';
import ProgressTable from '../components/DashboardComponent/ProgressTable';
import About from '../components/DashboardComponent/AboutSection/About';
import ProjectManager from '../components/DashboardComponent/AboutSection/ProjectManager';
import Logs from '../components/DashboardComponent/AboutSection/Logs';

class ProjectDashboard extends Component {
    
    render() {
        return (
            <React.Fragment>
                <main id="main-content">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="right-content no-bg new-dashboard">
                                <DashboardHeader />
                                <div className="row">
                                    <div className="col-lg-6">
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
                                    <div className="col-lg-6">
                                        <div className="card region-table">
                                            <div className="card-header main-card-header sub-card-header">
                                                <h5>Regions</h5>
                                                <div className="add-btn">
                                                    <a href={`#/`} onClick={this.handleClick}> Add new <span><i className="la la-plus"></i></span></a>
                                                </div>
                                            </div>
                                            <div className="card-body" style={{position:'relative', height:'434px'}}>
                                                <DatatablePage />
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="dashboard-counter mrt-30 bg-counter">
                                    <div className="card">
                                        <div className="card-header main-card-header sub-card-header">
                                            <h5>Project activity</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <BgCounter />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dashboard-counter mrt-30">
                                    <div className="row">
                                        <DashboardCounter />
                                    </div>
                                </div>
                                <div class="progress-table mrb-30">
                                    <div class="card">
                                        <div class="card-header main-card-header sub-card-header">
                                            <h5>Progress table</h5>
                                        </div>
                                        <div class="card-body">
                                            <ProgressTable />
                                        </div>
                                    </div>
                                </div>
                                <div className="chart mrb-30">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-header main-card-header sub-card-header">
                                                    <h5>Form submissions</h5>
                                                </div>
                                                <div className="card-body">
                                                    <SubmissionChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-header main-card-header sub-card-header">
                                                    <h5>Site progress</h5>
                                                </div>
                                                <div className="card-body">
                                                    <ProgressChart />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="about-section ">
                                    <div className="row">
                                        <div className="col-xl-4 col-md-6">
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
                                                    <h5>Project manager</h5>
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
                                        <div className="col-xl-4 col-md-12">
                                            <div className="card logs">
                                                <div className="card-header main-card-header sub-card-header">
                                                    <h5>Logs</h5>
                                                    <a href={`#/`} className="fieldsight-btn">view all</a>
                                                </div>
                                                <div className="card-body">
                                                    <div className="logs-list" style={{position:'relative', height:'314px'}}>
                                                    <Logs />
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

export default ProjectDashboard;
