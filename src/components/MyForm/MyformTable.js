import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Iframe from 'react-iframe';
import axios from 'axios'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { thisExpression } from '@babel/types';


class MyformTable extends Component {

    state = {
        project_list: [],
        list: [],

    }

    componentDidMount() {
        const url = 'https://fieldsight.naxa.com.np/fv3/api/myforms/';
        axios.get(url)
            
            .then(
                res => {
                    console.log("results", res)
                    this.setState({
                        list: res.data
                    })
                }
            ).catch(err => console.log("err", err))
    }


    render() {
        return (
            <React.Fragment>

                <div className="myform-table">
                    <div class="add-btn"><a href="#/" onClick={this.props.myFormPopup}>Add new <span><i class="la la-plus"></i></span></a></div>
                    <div className="table-wrapper" style={{ position: 'relative', height: '500px' }}>
                        <PerfectScrollbar>
                            <table id="myform_table" className="table-bordered table myform_table dataTable">
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
                                    {this.state.list.map((item, i) => (

                                        <tr key={i + 1}>
                                            <td>{i + 1}</td>
                                            <td>{item.title}</td>
                                            <td><i className="fa fa-clock-o"></i><span>{item.date_created}</span></td>
                                            <td><i className="fa fa-clock-o"></i><span>{item.date_modified}</span></td>
                                            <td>
                                                <a href={`#/`} onClick={(e) => this.props.togglePopup(e, 'preview', item.preview_url)} className="td-view-btn td-btn" data-toggle="tooltip" data-placement="top" title="Preview"> <i className="la la-eye"> </i> </a>
                                                <a href={`#/`} onClick={(e) => this.props.opentabhandler(e, item.edit_url)} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-edit" ></i> </a>
                                                <a href={`#/`} onClick={(e) => this.props.togglePopup(e, 'replace')} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Replace"> <i className="la la-refresh"> </i> </a>
                                                <a href={`#/`} onClick={(e) => this.props.togglePopup(e, 'share')} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Share"> <i className="la la-share-alt"> </i> </a>
                                                <a href={`#/`} onClick={(e) => this.props.globashare(item.share_global_url,item.id_string)} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="globals Share"> <i className="la la-globe"> </i> </a>
                                                <a href={`#/`} onClick={(e) => this.props.opentabhandler(e, item.download_url)} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-download" ></i> </a>
                                                <a href={`#/`} className="td-delete-btn td-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash"></i> </a>
                                            </td>
                                        </tr>

                                    ))}

                                </tbody>
                            </table>
                        </PerfectScrollbar>
                    </div>
                </div>

            </React.Fragment>

        );
    }

}

export default MyformTable;