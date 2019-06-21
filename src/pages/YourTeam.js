import React , {Component} from 'react';
import YourTeamSidebar from '../components/DashboardComponent/YourTeamSidebar';
import YourTeamTable from '../components/DashboardComponent/YourTeamTable';

class YourTeam extends Component {
    render(){
        return(
            <React.Fragment>
                <main id="main-content">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="left-sidebar new-sidebar sticky-top">
                                <div className="card" style={{minHeight: this.props.height}}>
                                    <div className="card-header main-card-header">
                                        <h5>Your Teams</h5>
                                    </div>
                                    <YourTeamSidebar />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="right-content">
                                <div className="card" style={{minHeight: this.props.height}}>
                                    <div className="card-header main-card-header">
                                        <h5>Projects</h5>
                                    </div>
                                    <div className="card-body">
                                        <YourTeamTable />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
export default YourTeam;
