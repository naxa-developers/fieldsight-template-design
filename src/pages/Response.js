import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import ResponseSurveyForm from '../components/Responsed/ResponseSurveyForm';
import ResponseScheduledForm from '../components/Responsed/ResponseScheduledForm';
import ResponseStageForm from '../components/Responsed/ResponseStageForm';
import ResponseGeneralForm from '../components/Responsed/ResponseGeneralForm';
import LeftSidebar from '../components/DashboardComponent/LeftSidebar';


class Response extends Component {
    render() {
        console.log("location", this.props.match)
        return (
            <React.Fragment>
                <main id="main-content">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="left-sidebar new-sidebar sticky-top">
                                <div className="card">
                                    <div className="card-header main-card-header">
                                        <h5>Meta Attributes</h5>
                                    </div>
                                    <div className="card-body">
                                        <LeftSidebar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="right-content">
                                <div className="tab-content">
                                    <Switch>
                                   
                                        <Route path={`${this.props.match.url}/components/Response/ResponseScheduledForm`} component={ResponseScheduledForm} />
                                        <Route
                                            path={`${this.props.match.url}/components/Response/ResponseStageForm`}
                                            component={ResponseStageForm}
                                        />
                                        <Route path={`${this.props.match.url}/components/Response/ResponseSurveyForm`} component={ResponseSurveyForm} />
                                        <Route exact path={this.props.match.url} component={ResponseGeneralForm} />
                                    </Switch>
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