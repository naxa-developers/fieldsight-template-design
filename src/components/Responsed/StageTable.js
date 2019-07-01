import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
class StageSubmissionTable extends Component {
    render() {
        return (
            <React.Fragment>
                <Accordion defaultActiveKey="0" className="accordion" id="accordion">
                    <Card>
                        <Card.Header>
                            <h5>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                #1 General Inspection
                                </Accordion.Toggle>
                            </h5>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Table id="substage1_table" className="table table-bordered dataTable">
                                    <thead>
                                        <tr>
                                            <th >Substage Name</th>
                                            <th >form Name</th>
                                            <th >Responses</th>
                                            <th >Form Guide</th>
                                            <th >Weight</th>
                                            <th >assigned date</th>
                                            <th >Default status</th>
                                            <th >Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Foundation (ALL structural typ.)</td>
                                            <td>_1_foundation_v4</td>
                                            <td>200</td>
                                            <td><a href="#"><i className="la la-book"></i></a></td>
                                            <td>0</td>
                                            <td><time><i className="la la-clock-o"></i> 2018-10-02</time></td>
                                            <td><a href="#" className="approved">Approved</a></td>
                                            <td>
                                                <a href="#" className="td-view-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i class="la la-eye"> </i> </a>
                                                <a href="#" className="td-edit-btn" data-toggle="tooltip" data-placement="top" title="View"> <i class="la la-edit"> </i> </a>
                                                <a href="#" className="td-delete-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i class="la la-trash-o"> </i> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Foundation (ALL structural typ.)</td>
                                            <td>_1_foundation_v4</td>
                                            <td>200</td>
                                            <td><a href="#"><i className="la la-book"></i></a></td>
                                            <td>0</td>
                                            <td><time><i className="la la-clock-o"></i> 2018-10-02</time></td>
                                            <td><a href="#" className="approved">Approved</a></td>
                                            <td>
                                                <a href="#" className="td-view-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-eye"> </i> </a>
                                                <a href="#" className="td-edit-btn" data-toggle="tooltip" data-placement="top" title="View"> <i className="la la-edit"> </i> </a>
                                                <a href="#" className="td-delete-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash-o"> </i> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Foundation (ALL structural typ.)</td>
                                            <td>_1_foundation_v4</td>
                                            <td>200</td>
                                            <td><a href="#"><i className="la la-book"></i></a></td>
                                            <td>0</td>
                                            <td><time><i className="la la-clock-o"></i> 2018-10-02</time></td>
                                            <td><a href="#" className="approved">Approved</a></td>
                                            <td>
                                                <a href="#" className="td-view-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-eye"> </i> </a>
                                                <a href="#" className="td-edit-btn" data-toggle="tooltip" data-placement="top" title="View"> <i className="la la-edit"> </i> </a>
                                                <a href="#" className="td-delete-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash-o"> </i> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Foundation (ALL structural typ.)</td>
                                            <td>_1_foundation_v4</td>
                                            <td>200</td>
                                            <td><a href="#"><i className="la la-book"></i></a></td>
                                            <td>0</td>
                                            <td><time><i className="la la-clock-o"></i> 2018-10-02</time></td>
                                            <td><a href="#" className="approved">Approved</a></td>
                                            <td>
                                                <a href="#" className="td-view-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-eye"> </i> </a>
                                                <a href="#" className="td-edit-btn" data-toggle="tooltip" data-placement="top" title="View"> <i className="la la-edit"> </i> </a>
                                                <a href="#" className="td-delete-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash-o"> </i> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Foundation (ALL structural typ.)</td>
                                            <td>_1_foundation_v4</td>
                                            <td>200</td>
                                            <td><a href="#"><i className="la la-book"></i></a></td>
                                            <td>0</td>
                                            <td><time><i className="la la-clock-o"></i> 2018-10-02</time></td>
                                            <td><a href="#" className="approved">Approved</a></td>
                                            <td>
                                                <a href="#" className="td-view-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-eye"> </i> </a>
                                                <a href="#" className="td-edit-btn" data-toggle="tooltip" data-placement="top" title="View"> <i className="la la-edit"> </i> </a>
                                                <a href="#" className="td-delete-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash-o"> </i> </a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <h5>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                #2 First Tranche Inspection
                                </Accordion.Toggle>
                            </h5>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                            <Table id="substage1_table" className="table-bordered dataTable">
                                    <thead>
                                        <tr>
                                            <th >Substage Name</th>
                                            <th >form Name</th>
                                            <th >Responses</th>
                                            <th >Form Guide</th>
                                            <th >Weight</th>
                                            <th >assigned date</th>
                                            <th >Default status</th>
                                            <th >Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Foundation (ALL structural typ.)</td>
                                            <td>_1_foundation_v4</td>
                                            <td>200</td>
                                            <td><a href="#"><i className="la la-book"></i></a></td>
                                            <td>0</td>
                                            <td><time><i className="la la-clock-o"></i> 2018-10-02</time></td>
                                            <td><a href="#" className="approved">Approved</a></td>
                                            <td>
                                                <a href="#" className="td-view-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i class="la la-eye"> </i> </a>
                                                <a href="#" className="td-edit-btn" data-toggle="tooltip" data-placement="top" title="View"> <i class="la la-edit"> </i> </a>
                                                <a href="#" className="td-delete-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i class="la la-trash-o"> </i> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Foundation (ALL structural typ.)</td>
                                            <td>_1_foundation_v4</td>
                                            <td>200</td>
                                            <td><a href="#"><i className="la la-book"></i></a></td>
                                            <td>0</td>
                                            <td><time><i className="la la-clock-o"></i> 2018-10-02</time></td>
                                            <td><a href="#" className="approved">Approved</a></td>
                                            <td>
                                                <a href="#" className="td-view-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-eye"> </i> </a>
                                                <a href="#" className="td-edit-btn" data-toggle="tooltip" data-placement="top" title="View"> <i className="la la-edit"> </i> </a>
                                                <a href="#" className="td-delete-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash-o"> </i> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Foundation (ALL structural typ.)</td>
                                            <td>_1_foundation_v4</td>
                                            <td>200</td>
                                            <td><a href="#"><i className="la la-book"></i></a></td>
                                            <td>0</td>
                                            <td><time><i className="la la-clock-o"></i> 2018-10-02</time></td>
                                            <td><a href="#" className="approved">Approved</a></td>
                                            <td>
                                                <a href="#" className="td-view-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-eye"> </i> </a>
                                                <a href="#" className="td-edit-btn" data-toggle="tooltip" data-placement="top" title="View"> <i className="la la-edit"> </i> </a>
                                                <a href="#" className="td-delete-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash-o"> </i> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Foundation (ALL structural typ.)</td>
                                            <td>_1_foundation_v4</td>
                                            <td>200</td>
                                            <td><a href="#"><i className="la la-book"></i></a></td>
                                            <td>0</td>
                                            <td><time><i className="la la-clock-o"></i> 2018-10-02</time></td>
                                            <td><a href="#" className="approved">Approved</a></td>
                                            <td>
                                                <a href="#" className="td-view-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-eye"> </i> </a>
                                                <a href="#" className="td-edit-btn" data-toggle="tooltip" data-placement="top" title="View"> <i className="la la-edit"> </i> </a>
                                                <a href="#" className="td-delete-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash-o"> </i> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Foundation (ALL structural typ.)</td>
                                            <td>_1_foundation_v4</td>
                                            <td>200</td>
                                            <td><a href="#"><i className="la la-book"></i></a></td>
                                            <td>0</td>
                                            <td><time><i className="la la-clock-o"></i> 2018-10-02</time></td>
                                            <td><a href="#" className="approved">Approved</a></td>
                                            <td>
                                                <a href="#" className="td-view-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-eye"> </i> </a>
                                                <a href="#" className="td-edit-btn" data-toggle="tooltip" data-placement="top" title="View"> <i className="la la-edit"> </i> </a>
                                                <a href="#" className="td-delete-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash-o"> </i> </a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </React.Fragment>
        )
    }
}
export default StageSubmissionTable