import React, { Component } from 'react';
import SiteDocTable from '../components/DashboardComponent/SiteDocTable'

class SiteDocList extends Component {
    
    render() {
        return (
            <React.Fragment>
                <main id="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="right-content">
                                    <div className="card" style={{height: this.props.height}}>
                                        <div className="card-header main-card-header">
                                            <h5>Site documents</h5>
                                            <div className="add-btn">
                                                <a href={`#/`} data-tab="site-popup">Add new <span><i className="la la-plus"></i></span></a>
                                            </div>
                                        </div>
                                        <div className="card-body ">
                                            <div className="dataTables_wrapper">
                                                <div className="Datatable-top">
                                                    <div className="dataTables_length" id="manage_table_length">
                                                        <label>Show <select name="manage_table_length" aria-controls="manage_table" className="">
                                                            <option value="10">10</option>
                                                            <option value="25">25</option>
                                                            <option value="50">50</option>
                                                            <option value="100">100</option>
                                                            </select> 
                                                            entries
                                                        </label>
                                                    </div>
                                                    <div id="manage_table_filter" className="dataTables_filter">
                                                        <label>Search:
                                                            <input type="search" className="" placeholder="" aria-controls="manage_table" />
                                                        </label>
                                                    </div>
                                                </div>
                                                
                                                <SiteDocTable />
                                                <div className="table-footer">
                                                    <div className="showing-rows">
                                                    <p>Showing <span>1</span> to <span>6</span>of <span>8</span> entries.</p>
                                                    </div>
                                                    <div className="table-pagination">
                                                    <ul>
                                                        <li className="page-item">
                                                            <a href={`#/`}><i className="la la-long-arrow-left"></i></a>
                                                        </li>
                                                        <li className="page-item current">
                                                            <a href={`#/`}>2</a>
                                                        </li>
                                                        <li className="page-item ">
                                                            <a href={`#/`}>3</a>
                                                        </li>
                                                        <li className="page-item ">
                                                            <a href={`#/`}>4</a>
                                                        </li>
                                                        <li className="page-item ">
                                                            <a href={`#/`}><i className="la la-long-arrow-right"></i></a>
                                                        </li>
                                                    </ul>
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

export default SiteDocList;
