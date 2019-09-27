import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
class StatusTable extends Component {
    render(){
        return(
            <React.Fragment>
                <Table responsive="xl" className="table  table-bordered  dataTable ">
                        <thead>
                            <tr>
                                <th >Name</th>
                                <th >ID</th>
                                <th >Username</th>
                                <th >Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href={`#/`} > RF Strongbacks Attic Floor</a></td>
                                <td>56,326</td>
                                <td><a href={`#/`} >mahendrarokaya013091</a></td>
                                <td>6 months ago</td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > RF Ring Beam</a></td>
                                <td>56,248</td>
                                <td><a href={`#/`} >manishretrofit</a></td>
                                <td>6 months ago</td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > Retrofitting Go/No-Go with Measurement</a></td>
                                <td>56,198</td>
                                <td><a href={`#/`} >nikeshrajretrofit</a></td>
                                <td>6 months ago</td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > RF Strongbacks Attic Floor</a></td>
                                <td>56,326</td>
                                <td><a href={`#/`} >mahendrarokaya013091</a></td>
                                <td>6 months ago</td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > RF Strongbacks Attic Floor</a></td>
                                <td>56,326</td>
                                <td><a href={`#/`} >mahendrarokaya013091</a></td>
                                <td>6 months ago</td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > RF Strongbacks Attic Floor</a></td>
                                <td>56,326</td>
                                <td><a href={`#/`} >mahendrarokaya013091</a></td>
                                <td>6 months ago</td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > RF Strongbacks Attic Floor</a></td>
                                <td>56,326</td>
                                <td><a href={`#/`} >mahendrarokaya013091</a></td>
                                <td>6 months ago</td>
                            </tr>
                            <tr>
                                <td><a href={`#/`} > RF Strongbacks Attic Floor</a></td>
                                <td>56,326</td>
                                <td><a href={`#/`} >mahendrarokaya013091</a></td>
                                <td>6 months ago</td>
                            </tr>
                        </tbody>
                    </Table>
            </React.Fragment>
        )
    }
}
export default StatusTable