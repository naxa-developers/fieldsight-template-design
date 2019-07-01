import React, { Component } from 'react';
import ResponseTable from '../Responsed/ResponseTable'
import StatusTable from '../Responsed/StatusTable'

class ResponseScheduledForm extends Component{
    state = {
        active: true,
    };
    handleClick = () => {
        this.setState({
            active: !this.state.active
        });
    }
    render(){
        return(
            <React.Fragment>
                <div className="card-header main-card-header sub-card-header">
                    <h5>Scheduled Forms</h5>
                    <dv className="dash-btn">
                        <button onClick={this.handleClick} className="fieldsight-btn">{this.state.active ? 'View By Status' : 'View by Form'}</button>
                    </dv>
                </div>
                <div className="card-body">
                    {this.state.active &&  <ResponseTable  />}

                    {!this.state.active && <StatusTable />}
                </div>      
            </React.Fragment>
        )
    }
}
export default ResponseScheduledForm