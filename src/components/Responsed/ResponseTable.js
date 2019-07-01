import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
class ResponseTable extends Component {
    render(){
        return(
            <React.Fragment>
                <Table responsive="xl" className="table  table-bordered  dataTable ">
                        <thead>
                            <tr>
                                <th >Name</th>
                                <th >Last Response On</th>
                                <th >Created Date</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href={`#/`} > Picture and GPS</a></td>
                                <td>June 4, 2019, 5:19 p.m.</td>
                                <td>June 4, 2019, 1:37 p.m.</td>
                                <td>
                                    <a href={`#/`} className="view-tag tag"><i className="la la-eye"></i> 3 submission</a>
                                    <a href={`#/`} className="edit-tag tag"><i className="la la-download"></i> Download</a>
                                    <a href={`#/`} className="pending-tag tag"><i className="la la-clone"></i> Version</a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > Picture and GPS</a></td>
                                <td>June 4, 2019, 5:19 p.m.</td>
                                <td>June 4, 2019, 1:37 p.m.</td>
                                <td>
                                    <a href={`#/`} className="view-tag tag"><i className="la la-eye"></i> 3 submission</a>
                                    <a href={`#/`} className="edit-tag tag"><i className="la la-download"></i> Download</a>
                                    <a href={`#/`} className="pending-tag tag"><i className="la la-clone"></i> Version</a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > Picture and GPS</a></td>
                                <td>June 4, 2019, 5:19 p.m.</td>
                                <td>June 4, 2019, 1:37 p.m.</td>
                                <td>
                                    <a href={`#/`} className="view-tag tag"><i className="la la-eye"></i> 3 submission</a>
                                    <a href={`#/`} className="edit-tag tag"><i className="la la-download"></i> Download</a>
                                    <a href={`#/`} className="pending-tag tag"><i className="la la-clone"></i> Version</a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > Picture and GPS</a></td>
                                <td>June 4, 2019, 5:19 p.m.</td>
                                <td>June 4, 2019, 1:37 p.m.</td>
                                <td>
                                    <a href={`#/`} className="view-tag tag"><i className="la la-eye"></i> 3 submission</a>
                                    <a href={`#/`} className="edit-tag tag"><i className="la la-download"></i> Download</a>
                                    <a href={`#/`} className="pending-tag tag"><i className="la la-clone"></i> Version</a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > Picture and GPS</a></td>
                                <td>June 4, 2019, 5:19 p.m.</td>
                                <td>June 4, 2019, 1:37 p.m.</td>
                                <td>
                                    <a href={`#/`} className="view-tag tag"><i className="la la-eye"></i> 3 submission</a>
                                    <a href={`#/`} className="edit-tag tag"><i className="la la-download"></i> Download</a>
                                    <a href={`#/`} className="pending-tag tag"><i className="la la-clone"></i> Version</a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > Picture and GPS</a></td>
                                <td>June 4, 2019, 5:19 p.m.</td>
                                <td>June 4, 2019, 1:37 p.m.</td>
                                <td>
                                    <a href={`#/`} className="view-tag tag"><i className="la la-eye"></i> 3 submission</a>
                                    <a href={`#/`} className="edit-tag tag"><i className="la la-download"></i> Download</a>
                                    <a href={`#/`} className="pending-tag tag"><i className="la la-clone"></i> Version</a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > Picture and GPS</a></td>
                                <td>June 4, 2019, 5:19 p.m.</td>
                                <td>June 4, 2019, 1:37 p.m.</td>
                                <td>
                                    <a href={`#/`} className="view-tag tag"><i className="la la-eye"></i> 3 submission</a>
                                    <a href={`#/`} className="edit-tag tag"><i className="la la-download"></i> Download</a>
                                    <a href={`#/`} className="pending-tag tag"><i className="la la-clone"></i> Version</a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > Picture and GPS</a></td>
                                <td>June 4, 2019, 5:19 p.m.</td>
                                <td>June 4, 2019, 1:37 p.m.</td>
                                <td>
                                    <a href={`#/`} className="view-tag tag"><i className="la la-eye"></i> 3 submission</a>
                                    <a href={`#/`} className="edit-tag tag"><i className="la la-download"></i> Download</a>
                                    <a href={`#/`} className="pending-tag tag"><i className="la la-clone"></i> Version</a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
            </React.Fragment>
        )
    }
}
export default ResponseTable