import React, { Component } from 'react';
import ProjectManageTable from '../components/DashboardComponent/ProjectManageTable';
import Zoom from 'react-reveal/Zoom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const SelectOption = () => (
    <Select options={options} />
)

const popupState = {
    addModal: false, uploadModal: false
}
class ProjectManageSite extends Component {
    state = {
        addModal: false, uploadModal: false
    }
    showPopup = (e, type) => {
        this.setState((prevState) => ({
            ...popupState,
            [`${type}Modal`]: true
        }));
    }

    closePopup = () => {
        this.setState({
            addModal: false, uploadModal: false
        });
    }

    render() {
        return (
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
                                <a href={`#/`} className="fieldsight-btn" onClick={(e) => this.showPopup(e, 'add')}><i className="la la-plus"></i></a>
                                <a href={`#/`} className="fieldsight-btn">Meta Attributes</a>
                                <a href={`#/`} className="fieldsight-btn" onClick={(e) => this.showPopup(e, 'upload')}>Bulk upload</a>
                            </div>
                        </div>
                        <div className="card-body">
                            <ProjectManageTable />
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
                        {this.state.uploadModal && <Zoom duration={500} >
                            <div className="fieldsight-popup open" >
                                <div className="popup-body lg-body">
                                    <div className="card">
                                        <div className="card-header main-card-header">
                                            <h5>Bulk Upload</h5>
                                            <span className="popup-close" onClick={this.closePopup}><i className="la la-close"></i></span>
                                        </div>
                                        <div className="card-body">
                                            <form className="edit-form" style={{ position: 'relative', height: '250px' }}>
                                                <PerfectScrollbar>
                                                    <div className="form-group">
                                                        <label>
                                                            Upload file
                                                    </label>
                                                        <div className="upload-form">
                                                            <div className="upload-wrap">
                                                                <div className="content">
                                                                    <h3>Drag & Drop an image</h3>
                                                                    <span>or</span>
                                                                </div>
                                                                <input type="file" className="userprofile_picture" id="filePhoto" />
                                                                <div className="fieldsight-btn">
                                                                    <label for="upload-btn">upload <i class="la la-cloud-upload"></i></label>
                                                                    <input type="file" id="upload-btn" multiple />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </PerfectScrollbar>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                        }
                        {this.state.addModal && <Zoom duration={500} >
                            <div className="fieldsight-popup open" >
                                <div className="popup-body lg-body">
                                    <div className="card">
                                        <div className="card-header main-card-header">
                                            <h5>Add site</h5>
                                            <span className="popup-close" onClick={this.closePopup}><i className="la la-close"></i></span>
                                        </div>
                                        <div className="card-body">
                                            <form className="floating-form" style={{ position: 'relative', height: '300px' }}>
                                                <PerfectScrollbar>
                                                    <div className="row">
                                                        <div className="col-xl-6 col-md-12">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" required />
                                                                <label for="input">id</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-md-12">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" required />
                                                                <label for="input">Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-md-12">
                                                            <div className="form-group">
                                                                <SelectOption />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-md-12">
                                                            <div className="form-group">
                                                                <input type="number" className="form-control" required />
                                                                <label for="input">Phone</label>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-6 col-md-12">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" required />
                                                                <label for="input">Address</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-md-12">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" required />
                                                                <label for="input">Region</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label>
                                                                    Site Photo
                                                                </label>
                                                                <div className="upload-form">
                                                                    <div className="upload-wrap">
                                                                        <div className="content">
                                                                            <h3>Drag & Drop an image</h3>
                                                                            <span>or</span>
                                                                        </div>
                                                                        <input type="file" className="userprofile_picture" id="filePhoto" />
                                                                        <div className="fieldsight-btn">
                                                                            <label for="upload-btn">upload <i class="la la-cloud-upload"></i></label>
                                                                            <input type="file" id="upload-btn" multiple />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="form-group pull-right no-margin">
                                                            <button type="submit" class="fieldsight-btn">Save</button>
                                                        </div>
                                                    </div>

                                                </PerfectScrollbar>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                        }
                        
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
export default ProjectManageSite