import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Iframe from 'react-iframe';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import axios from 'axios'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PreviewModal from "./PreviewModal";



class ProjecTable extends Component {

    state = {
        project_list: [],
        list: [],

    }


    componentDidMount() {
        const url = 'https://fieldsight.naxa.com.np/fv3/api/myprojectforms/';
        axios.get(url)
            //   .then(res => res.json())
            .then(
                res => {
                    console.log("results_proj", res)
                    this.setState({
                        project_list: res.data
                    })
                }
            ).catch(err => console.log("err", err))
    }

    render() {
        return (
            <React.Fragment>

                {this.state.project_list.map((item, i) => (
                    <div key={i}>
                        <div className="card-header main-card-header sub-card-header bg-header">
                            <h5>{item.name}</h5>
                        </div>
                        <div className="card-body" style={{ position: 'relative', height: '300px' }}>
                            <PerfectScrollbar>
                                <table id="project_form_table" className="table-bordered table project_form dataTable">
                                    <thead>
                                        <tr>
                                            <th > S.N</th>
                                            <th >Form Name</th>
                                            <th >Create Date</th>
                                            <th >Updated date</th>
                                            <th >Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {item.forms.map((items, i) => (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td style={{ width: '30%' }}>{items.title}</td>
                                                <td><i className="fa fa-clock-o"></i><span>2019-08-14</span></td>
                                                <td><i className="fa fa-clock-o"></i><span>2019-10-14</span></td>
                                                <td>
                                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Preview!</Tooltip>}>
                                                        <a href={`#/`} onClick={(e) => this.props.commonPopupHandler(e, PreviewModal, items.preview_url, "Preview Form", "preview", null)} className="td-view-btn td-btn" > <i className="la la-eye"> </i> </a>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Edit!</Tooltip>}>
                                                    <a href={`#/`} onClick={(e) => this.props.OpenTabHandler(e, items.edit_url)} className="td-edit-btn td-btn" > <i className="la la-edit"></i> </a>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Replace!</Tooltip>}>
                                                    <a href={`#/`} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Replace"> <i className="la la-refresh"> </i> </a>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Clone!</Tooltip>}>
                                                    <a href={`#/`} className="td-edit-btn td-btn" > <i className="la la-clone"> </i> </a>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete!</Tooltip>}>
                                                    <a href={`#/`} className="td-delete-btn td-btn" > <i className="la la-trash"></i> </a>
                                                    </OverlayTrigger>
                                                </td>
                                            </tr>

                                        ))}


                                    </tbody>
                                </table>
                            </PerfectScrollbar>
                        </div>
                    </div>


                ))}
            </React.Fragment>
        );
    }

}

export default ProjecTable;