import React , {Component} from 'react';
import UserTable from '../components/DashboardComponent/UserTable';
import FormModal from "../components/FormModal";

const INITIAL_STATE = {
    showModal: false,
  };

class Users extends Component {
    state = INITIAL_STATE;

    toggleModal = () => {
      this.setState(({ showModal }) => ({
        showModal: !showModal
      }));
    };
    render(){
        const {
            state: {showModal},
            toggleModal,
            onSubmitHandler
          } = this;
        return(
            <React.Fragment>
                <main id="main-content">
                    <div className="card">
                        <div className="card-header main-card-header sub-card-header">
                            <h5>Site Manage</h5>
                            <div className="dash-btn">
                                <form className="floating-form">
                                    <div className="form-group mr-0">
                                        <input type="search" className="form-control" required />
                                        <label for="input">Search</label>
                                        <i className="la la-search"></i>
                                    </div>
                                </form>
                                <a href={`#/`} className="fieldsight-btn" onClick={this.toggleModal}><i className="la la-plus"></i></a>
                            </div>
                        </div>
                        <div className="card-body">
                            <UserTable />
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
                        {showModal && (
                            <FormModal
                                title="Add User"
                                toggleModal={toggleModal}
                                submitHandler={onSubmitHandler}
                                >
                                    
                                {" "}
                            </FormModal>
                         ) }
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
export default Users