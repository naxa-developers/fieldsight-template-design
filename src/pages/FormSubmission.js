import React, { Component } from 'react';
import FormSubmisionTable from '../components/DashboardComponent/FormSubmisionTable';


class FormSubmission extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main-content">
                    <div className="card">
                        <div className="card-header main-card-header sub-card-header">
                            <h5>Form Submissions | Retrofitting Go/No-Go with Measurement</h5>
                            <div className="dash-btn">
                                <form className="floating-form">
                                    <div className="form-group mr-0">
                                        <input type="search" className="form-control" required />
                                        <label for="input">Search</label>
                                        <i className="la la-search"></i>
                                    </div>
                                </form>
                                <a href={`#/`} className="fieldsight-btn">Responslist</a>
                            </div>
                        </div>
                        <div className="card-body">
                            <FormSubmisionTable />
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
                </main>
            </React.Fragment>
        )
    }
}
export default FormSubmission