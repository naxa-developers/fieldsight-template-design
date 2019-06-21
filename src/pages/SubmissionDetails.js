import React, { Component } from 'react';
import SubSiteDetails from '../components/DashboardComponent/SubSiteDetails';
import SubSiteInfo from '../components/DashboardComponent/SubSiteInfo';
import SubAcc from '../components/DashboardComponent/SubAcc';

const initialState = {
    statusTab:false, histryTab:false,
}

class SubmissionDetails extends Component {
    state ={
        statusTab:true, histryTab:false,
    }
    toggleTab = (e, type) => {
        this.setState((prevState)=>({
            ...initialState,
            [`${type}Tab`]: true
        }));
    }
    
    histryOpen = () => {
        this.setState({
            statusTab:false, histryTab:true
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <main id="main-content">
                    <div className="row"> 
                        <div className="col-xl-8 col-lg-8">
                            <div className="right-content no-bg">
                                <div className="row">
                                    
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header main-card-header">
                                                <h5>site details</h5>
                                            </div>
                                            <div className="card-body site-details" style={{position:'relative', height:'332px'}}>
                                                <SubSiteDetails />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header main-card-header">
                                                <h5>site information</h5>
                                            </div>
                                            <div className="card-body site-info submission-site-info" style={{position:'relative', height:'332px'}}>
                                                <SubSiteInfo />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="group-submission mrt-30">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-header main-card-header sticky-top">
                                                    <div className="head-right">
                                                        <h5>household survey</h5>
                                                        <div className="submitted-header">
                                                            <div className="submit-by">
                                                                <label>by :</label> Santosh kshetri
                                                            </div>
                                                            <time>
                                                                <label>on:</label> 18-04-2019
                                                            </time>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body submission-card">
                                                    <div className="submission-list normal-list">
                                                        <ul>
                                                            <li>
                                                                <h6>Surveyed time / सर्वे गरिएको मिति</h6>
                                                                <time><i className="la la-clock-o"> May 19 -2019</i></time>
                                                            </li>
                                                            <li>
                                                                <h6>Surveyed time / सर्वे गरिएको मिति</h6>
                                                                <time><i className="la la-clock-o"> May 19 -2019</i></time>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <SubAcc />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-4">
                            <div className="new-sidebar submission-sidebar sticky-top" >
                                <div className="card" style={{height: this.props.height}}>
                                    <div className="card-body">
                                        
                                        <div className="submission-header">
                                            <ul className="nav nav-tabs" >
                                                <li className="nav-item">
                                                    <a className={this.state.statusTab ? "nav-link active" : "nav-link"}  href={`#/`} onClick={(e) => this.toggleTab(e,'status')}>Status</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={this.state.histryTab ? "nav-link active" : "nav-link"} href={`#/`} onClick={(e) => this.toggleTab(e,'histry')}>History</a>
                                                </li>
                                            </ul>
                                            <div className="head-icon">
                                                <a href={`#/`}  data-toggle="tooltip" data-placement="top" title="Edit Submission"><i className="la la-edit"></i></a>
                                                <a href={`#/`}  data-toggle="tooltip" data-placement="top" title="Download as PDF"><i className="la la-download"></i></a>
                                                <a href={`#/`}  data-toggle="tooltip" data-placement="top" title="Hide Null Values"><i className="la la-sign-out"></i></a>
                                            </div>
                                            
                                        </div>
                                        
                                        <div className="tab-content">
                                            {this.state.statusTab && 
                                                
                                                <div className="">
                                                
                                                    <div className="status-view"> 
                                                        <a href={`#/`} className="pending">Pending <i className="la la-hourglass-2"></i></a>
                                                    </div>
                                                    <div className="status">
                                                        <form className="edit-form" method="post" action="" enctype="multipart/form-data">
                                                            <div className="form-group">
                                                                <label>
                                                                    comment
                                                                </label>
                                                                <textarea className="form-control" placeholder="Please put your comment here."></textarea>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>
                                                                    attach file
                                                                </label>
                                                                <div className="upload-form">
                                                                    <input type="file" name="userprofile_picture" id="filePhoto" />
                                                                    <div className="fieldsight-btn">
                                                                        <label for="upload-btn">upload <i className="la la-cloud-upload"></i></label>
                                                                        <input type="file" id="upload-btn" multiple />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group flexrow">
                                                                
                                                                <div className="custom-checkbox display-inline">
                                                                    <div className="radiobox approved">
                                                                        <label >
                                                                            <input type="radio" name="radioYes" /><i className="helper"></i>Approve
                                                                        </label>
                                                                    </div>
                                                                    <div className="radiobox flagged">
                                                                        <label>
                                                                            <input type="radio" name="radioYes" /><i className="helper"></i>Flag
                                                                        </label>
                                                                    </div>
                                                                    <div className="radiobox rejected">
                                                                        <label>
                                                                            <input type="radio" name="radioYes" /><i className="helper"></i>Reject
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group pull-right">
                                                                <button type="submit" className="fieldsight-btn">Save</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            }
                                                
                                            {this.state.histryTab &&
                                                
                                                <div className="">
                                                    <div className="thumb-list">
                                                        <ul>
                                                            <li>
                                                                <figure>
                                                                    <img src="/img/pf.jpg" alt="pf"/>
                                                                </figure>
                                                                <div className="content">
                                                                    <p><a href={`#/`} className="name">Santosh Kshetri </a> <span>makes this submission as</span> <strong className="flagged">Flagged</strong></p>
                                                                    <div className="review-text">
                                                                        Porttitor orci sed odio dignissim bibendum. Aenean varius quam magna, sed malesuada massa tincidunt id.
                                                                    </div>
                                                                    <time>
                                                                        <i className="la la-clock-o"></i> May 23 2019
                                                                    </time>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <figure>
                                                                    <img src="/img/pf.jpg" alt="pf"/>
                                                                </figure>
                                                                <div className="content">
                                                                    <p><a href={`#/`} className="name">Santosh Kshetri </a> <span>makes this submission as</span> <strong className="approved">Approved</strong></p>
                                                                    <div className="review-text">
                                                                        Porttitor orci sed odio dignissim bibendum. Aenean varius quam magna, sed malesuada massa tincidunt id.
                                                                    </div>
                                                                    <time>
                                                                        <i className="la la-clock-o"></i> May 23 2019
                                                                    </time>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <figure>
                                                                    <img src="/img/pf.jpg" alt="pf"/>
                                                                </figure>
                                                                <div className="content">
                                                                    <p><a href={`#/`} className="name">Santosh Kshetri </a> <span>makes this submission as</span> <strong className="rejected">Flagged</strong></p>
                                                                    <div className="review-text">
                                                                        Porttitor orci sed odio dignissim bibendum. Aenean varius quam magna, sed malesuada massa tincidunt id.
                                                                    </div>
                                                                    <time>
                                                                        <i className="la la-clock-o"></i> May 23 2019
                                                                    </time>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <figure>
                                                                    <img src="/img/pf.jpg" alt="pf"/>
                                                                </figure>
                                                                <div className="content">
                                                                    <p><a href={`#/`} className="name">Santosh Kshetri </a> <span>makes this submission as</span> <strong className="pending">Pending</strong></p>
                                                                    <div className="review-text">
                                                                        Porttitor orci sed odio dignissim bibendum. Aenean varius quam magna, sed malesuada massa tincidunt id.
                                                                    </div>
                                                                    <time>
                                                                        <i className="la la-clock-o"></i> May 23 2019
                                                                    </time>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <figure>
                                                                    <img src="/img/pf.jpg" alt="pf"/>
                                                                </figure>
                                                                <div className="content">
                                                                    <p><a href={`#/`} className="name">Santosh Kshetri </a> <span>makes this submission as</span> <strong className="flagged">Flagged</strong></p>
                                                                    <div className="review-text">
                                                                        Porttitor orci sed odio dignissim bibendum. Aenean varius quam magna, sed malesuada massa tincidunt id.
                                                                    </div>
                                                                    <time>
                                                                        <i className="la la-clock-o"></i> May 23 2019
                                                                    </time>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <figure>
                                                                    <img src="/img/pf.jpg" alt="pf"/>
                                                                </figure>
                                                                <div className="content">
                                                                    <p><a href={`#/`} className="name">Santosh Kshetri </a> <span>makes this submission as</span> <strong className="approved">Approved</strong></p>
                                                                    <div className="review-text">
                                                                        Porttitor orci sed odio dignissim bibendum. Aenean varius quam magna, sed malesuada massa tincidunt id.
                                                                    </div>
                                                                    <time>
                                                                        <i className="la la-clock-o"></i> May 23 2019
                                                                    </time>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <figure>
                                                                    <img src="/img/pf.jpg" alt="pf"/>
                                                                </figure>
                                                                <div className="content">
                                                                    <p><a href={`#/`} className="name">Santosh Kshetri </a> <span>makes this submission as</span> <strong className="rejected">Rejected</strong></p>
                                                                    <div className="review-text">
                                                                        Porttitor orci sed odio dignissim bibendum. Aenean varius quam magna, sed malesuada massa tincidunt id.
                                                                    </div>
                                                                    <time>
                                                                        <i className="la la-clock-o"></i> May 23 2019
                                                                    </time>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <figure>
                                                                    <img src="/img/pf.jpg" alt="pf"/>
                                                                </figure>
                                                                <div className="content">
                                                                    <p><a href={`#/`} className="name">Santosh Kshetri </a> <span>makes this submission as</span> <strong className="pending">Pending</strong></p>
                                                                    <div className="review-text">
                                                                        Porttitor orci sed odio dignissim bibendum. Aenean varius quam magna, sed malesuada massa tincidunt id.
                                                                    </div>
                                                                    <time>
                                                                        <i className="la la-clock-o"></i> May 23 2019
                                                                    </time>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                            }
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

export default SubmissionDetails;
