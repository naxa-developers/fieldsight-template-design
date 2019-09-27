import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import SubmissionMap from '../DashboardComponent/SubmissionMap'


class SubAcc extends Component {

    state = {
        active: false,
    };

      toggleIcon = () => {
        this.setState({ 
            active: !this.state.active 
        });
    };
    
    render() {
        return (
            <React.Fragment>
                <Accordion id ="accordion">
                    <Card>
                        <Card.Header>
                        {/* <h5 className={this.state.showOpen ? "rotated" : null} onClick={() => this.setState({showOpen: true})}></h5> */}
                            <h5 className={this.state.active ? "rotate" : "non-rotate"} onClick={this.toggleIcon}>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Group 1
                                </Accordion.Toggle>
                            </h5>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
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
                                <li>
                                    <h6>Surveyed time / सर्वे गरिएको मिति</h6>
                                    <div className="submission-map">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3">
                                                <div className="map-form">
                                                    <SubmissionMap />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3">
                                                <div className="map-legend">
                                                    <p><span>Latitude:</span><label>27.05</label></p>
                                                    <p><span>Longitude:</span><label>85.15</label></p>
                                                    <p><span>Altitude:</span><label>2100</label></p>
                                                    <p><span>Accuracy:
                                                        </span><label>7.05</label></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card no-boxshadow subgroup">
                            <div className="card-header">
                                <h5>
                                    Subgroup 1
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="submission-list thumb-list">
                                    <ul>
                                        <li>
                                            <figure>
                                                <img src="/img/pf.jpg" alt="image"/>
                                            </figure>
                                            <div className="content">
                                                <h6>Surveyed time / सर्वे गरिएको मिति</h6>
                                                <time><i className="la la-clock-o"> May 19 -2019</i></time>
                                            </div>
                                        </li>
                                        <li>
                                            <figure>
                                                <img src="/img/pf.jpg" alt="image"/>
                                            </figure>
                                            <div className="content">
                                                <h6>Surveyed time / सर्वे गरिएको मिति</h6>
                                                <time><i className="la la-clock-o"> May 19 -2019</i></time>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="submission-map">
                                        <div className="row">
                                            <div className="col-xl-3 col-md-3">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card no-boxshadow subgroup">
                            <div className="card-header">
                                <h5>
                                    Subgroup 1
                                </h5>
                            </div>
                            <div className="card-body">
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
                                <div className="card no-boxshadow subgroup-2">
                                    <div className="card-header">
                                        <h5>
                                            Subgroup 2
                                        </h5>
                                    </div>
                                    <div className="card-body">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <h5 className={this.state.active ? "rotate" : "non-rotate"} onClick={this.toggleIcon}>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Group 2
                                </Accordion.Toggle>
                            </h5>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
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
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </React.Fragment>
        );
    }
}

export default SubAcc;
