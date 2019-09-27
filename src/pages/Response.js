import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import ResponseSurveyForm from '../components/Responsed/ResponseSurveyForm';
import ResponseScheduledForm from '../components/Responsed/ResponseScheduledForm';
import ResponseStageForm from '../components/Responsed/ResponseStageForm';
import ResponseGeneralForm from '../components/Responsed/ResponseGeneralForm';
import ResponseSetting from '../components/Responsed/ResponseSetting';
import DeleteTable from '../components/Responsed/DeleteTable';


class Response extends Component {
    state = {
        hide: true,
    };
    toggleHide = () => {
        this.setState({
            hide: !this.state.hide
        });
    }
    render() {
        return (
            <React.Fragment>
                <main id="main-content">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="left-sidebar new-sidebar sticky-top">
                                <div className="card">
                                    <div className="card-header main-card-header">
                                        <h5>Submission Forms</h5>
                                    </div>
                                    <div className="card-body">
                                        <ResponseSetting />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="right-content">
                                <div className="card">
                                    <div className="tab-content">
                                        <Switch>

                                            <Route path={`${this.props.match.url}/components/Responsed/ResponseScheduledForm`} component={ResponseScheduledForm} />
                                            
                                            <Route
                                                path={`${this.props.match.url}/components/Responsed/ResponseStageForm`}
                                                component={ResponseStageForm}
                                            />
                                            <Route path={`${this.props.match.url}/components/Responsed/ResponseSurveyForm`} component={ResponseSurveyForm} />
                                            <Route exact path={this.props.match.url} component={ResponseGeneralForm} />
                                        </Switch>
                                    </div>
                                </div>
                                <div className="card no-boxshadow">
                                    <div className="card-header main-card-header sub-card-header">
                                        <h5>Deleted Forms</h5>
                                        <div className="dash-btn">
                                            {this.state.hide ? (<button type="button" className="btn-toggle" onClick={this.toggleHide}>
                                                show
                                            <div className="handle"></div> 
                                            </button>)
                                            : (<button type="button" className="btn-toggle" onClick={this.toggleHide} style={{backgroundColor:'#28a745', color:'white',textAlign:'left'}}>
                                            hide
                                                <div className="handle" style={{left:'auto', right:'0.1875rem'}}></div> 
                                            </button>)}
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        {!this.state.hide && 
                                        <DeleteTable />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </React.Fragment>
        )
    }
}
export default Response