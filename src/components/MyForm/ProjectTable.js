import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Iframe from 'react-iframe';
import axios from 'axios'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { thisExpression } from '@babel/types';


class ProjecTable extends Component {

    state = {
        project_list: [],
        list:[],

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
                    <div className="table-list" key={i}>
                        <h4>{item.name}</h4>
                        <div className="table-wrapper" style={{ position: 'relative', height: '300px' }}>
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
                                                <td>{i+1}</td>
                                                <td>{items.title}</td>
                                                <td><i className="fa fa-clock-o"></i><span>2019-08-14</span></td>
                                                <td><i className="fa fa-clock-o"></i><span>2019-10-14</span></td>
                                                <td>
                                                    <a href={`#/`} onClick={(e) => this.props.togglePopup(e, 'preview', items.preview_url)} className="td-view-btn td-btn" data-toggle="tooltip" data-placement="top" title="Preview"> <i className="la la-eye"> </i> </a>
                                                    <a href={`#/`} onClick={(e) => this.props.opentabhandler(e, items.edit_url)} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-edit"></i> </a>
                                                    <a href={`#/`} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Replace"> <i className="la la-refresh"> </i> </a>
                                                    <a href={`#/`} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Clone"> <i className="la la-clone"> </i> </a>
                                                    <a href={`#/`} className="td-delete-btn td-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash"></i> </a>
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