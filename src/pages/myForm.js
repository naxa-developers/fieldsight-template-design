import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
const initialState = {
    myTab:false, projectTab:false
}
const popupState = {
    previewPopup:false, sharePopup:false, replacePopup:false
}

const userState = {
    userTab:true, teamTab:false
}

class myForm extends Component {
    state ={
        myTab:true, projectTab:false, previewPopup:false, sharePopup:false, replacePopup:false, userTab:true, teamTab:false
    }
    toggleTab = (e, type) => {
        this.setState((prevState)=>({
            ...initialState,
            [`${type}Tab`]: true
        }));
    }
    openTab = (e, link) => {
        this.setState((linkState)=>({
            ...userState,
            [`${link}Tab`]: true
        }));
    }
    togglePopup = (e, type) => {
        this.setState((prevState)=>({
            ...popupState,
            [`${type}Popup`]: true
        }));
    }

    closePopup = () => {  
        this.setState({  
            previewPopup:false, sharePopup:false, replacePopup:false  
        });
    }
    
    
    render() {
        return (
            <React.Fragment>
                <main id="main-content">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="right-content no-bg">
                                <div className="card" style={{height: this.props.height}}>
                                    <div className="card-body myform-content">
                                        <div className="myform-header mrb-30">
                                            <ul className="nav nav-tabs " id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className={this.state.myTab ? "nav-link active" : "nav-link"} href={`#/`} onClick={(e) => this.toggleTab(e,'my')}>My forms</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={this.state.projectTab ? "nav-link active" : "nav-link"} href={`#/`} onClick={(e) => this.toggleTab(e,'project')}>Project forms</a>
                                                </li>
                                            </ul>
                                            
                                        </div>
                                        <div className="tab-content">
                                            <div className="">
                                                {this.state.myTab && 
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
                                                            <tr>
                                                                <td>1</td>
                                                                <td>name</td>
                                                                <td><i className="fa fa-clock-o"></i><span>2019-08-14</span></td>
                                                                    <td><i className="fa fa-clock-o"></i><span>2019-08-14</span></td>
                                                                <td>
                                                                <a href={`#/`} onClick={(e) => this.togglePopup(e,'preview')} className="td-view-btn td-btn" data-toggle="tooltip" data-placement="top" title="Preview"> <i className="la la-eye"> </i> </a>
                                                                    <a href={`#/`} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-edit" ></i> </a>
                                                                    <a href={`#/`} onClick={(e) => this.togglePopup(e,'replace')} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Replace"> <i className="la la-refresh"> </i> </a>
                                                                    <a href={`#/`} onClick={(e) => this.togglePopup(e,'share')} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Replace"> <i className="la la-share-alt"> </i> </a>
                                                                    <a href={`#/`} className="td-delete-btn td-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash"></i> </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Home owner's name</td>
                                                                <td><i className="fa fa-clock-o"></i><span>2019-08-14</span></td>
                                                                <td><i className="fa fa-clock-o"></i><span>2019-10-14</span></td>
                                                                <td>
                                                                    <a href={`#/`} onClick={(e) => this.togglePopup(e,'preview')} className="td-view-btn td-btn" data-toggle="tooltip" data-placement="top" title="Preview"> <i className="la la-eye"> </i> </a>
                                                                    <a href={`#/`} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-edit" ></i> </a>
                                                                    <a href={`#/`} onClick={(e) => this.togglePopup(e,'replace')} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Replace"> <i className="la la-refresh"> </i> </a>
                                                                    <a href={`#/`} onClick={(e) => this.togglePopup(e,'share')} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Replace"> <i className="la la-share-alt"> </i> </a>
                                                                    <a href={`#/`} className="td-delete-btn td-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash"></i> </a>
                                                                </td>
                                                            </tr>
                                
                                                        </tbody>
                                                    </table>
                                                }
                                            </div>
                                            <div className="">
                                                {this.state.projectTab && 
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
                                                            <tr>
                                                                <td>1</td>
                                                                <td>name</td>
                                                                <td><i className="fa fa-clock-o"></i><span>2019-08-14</span></td>
                                                                    <td><i className="fa fa-clock-o"></i><span>2019-08-14</span></td>
                                                                <td>
                                                                    <a href={`#/`} className="td-view-btn td-btn" data-toggle="tooltip" data-placement="top" title="Preview"> <i className="la la-eye"> </i> </a>
                                                                    <a href={`#/`} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-edit"></i> </a>
                                                                    <a href={`#/`} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Replace"> <i className="la la-refresh"> </i> </a>
                                                                    <a href={`#/`} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Replace"> <i className="la la-share-alt"> </i> </a>
                                                                    <a href={`#/`} className="td-delete-btn td-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash"></i> </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Home owner's name</td>
                                                                <td><i className="fa fa-clock-o"></i><span>2019-08-14</span></td>
                                                                <td><i className="fa fa-clock-o"></i><span>2019-10-14</span></td>
                                                                <td>
                                                                <a href={`#/`} className="td-view-btn td-btn" data-toggle="tooltip" data-placement="top" title="Preview"> <i className="la la-eye"> </i> </a>
                                                                    <a href={`#/`} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Edit"> <i className="la la-edit"></i> </a>
                                                                    <a href={`#/`} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Replace"> <i className="la la-refresh"> </i> </a>
                                                                    <a href={`#/`} className="td-edit-btn td-btn" data-toggle="tooltip" data-placement="top" title="Replace"> <i className="la la-share-alt"> </i> </a>
                                                                    <a href={`#/`} className="td-delete-btn td-btn" data-toggle="tooltip" data-placement="top" title="Delete"> <i className="la la-trash"></i> </a>
                                                                </td>
                                                            </tr>
                                
                                                        </tbody>
                                                    </table>
                                                }
                                            </div>
                                            {this.state.previewPopup && <Zoom duration ={500} >
                                                <div className="fieldsight-popup open" id="add-data">
                                                    <div className="popup-body">
                                                        <div className="card">
                                                            <div className="card-header main-card-header">
                                                                <h5>Preview</h5>
                                                                <span className="popup-close"  onClick={this.closePopup}><i className="la la-close"></i></span>
                                                            </div>
                                                            <div className="card-body" style={{position:'relative', height:'312px'}}>
                                                                <PerfectScrollbar>
                                                                    <iframe src="http://hotelmalaya.com/"></iframe>
                                                                </PerfectScrollbar>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Zoom>
                                            }
                                            {this.state.sharePopup && <Zoom duration ={500} >
                                                <div className="fieldsight-popup open" >
                                                    <div className="popup-body">
                                                        <div className="card">
                                                            <div className="card-header main-card-header">
                                                                <h5>Share</h5>
                                                                <span className="popup-close"  onClick={this.closePopup}><i className="la la-close"></i></span>
                                                            </div>
                                                            <div className="card-body">
                                                                <ul className="nav nav-tabs ">
                                                                    <li className="nav-item">
                                                                        <a className={this.state.userTab ? "nav-link active" : "nav-link"} href={`#/`} onClick={(e) => this.openTab(e,'user')}>Users</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className={this.state.teamTab ? "nav-link active" : "nav-link"} href={`#/`} onClick={(e) => this.openTab(e,'team')}>Teams</a>
                                                                    </li>
                                                                </ul>
                                                                {this.state.userTab && 
                                                                    <div className="thumb-list userlist" style={{position:'relative', height:'250px'}}>
                                                                        <PerfectScrollbar>
                                                                            <ul>
                                                                                <li>
                                                                                    <figure>
                                                                                        <img src="/img/pf.jpg" alt="pf"/>
                                                                                    </figure>
                                                                                    <div className="content">
                                                                                        <h6>Santosh Khatri </h6>
                                                                                        <span>skhatri.np@gmail.com</span>
                                                                                    </div>
                                                                                    <form>
                                                                                        <div className="form-group">
                                                                                            <div className="custom-checkbox">
                                                                                                <div className="checkbox ">
                                                                                                    <label>
                                                                                                        <input type="checkbox" name="radioYes" /><i class="helper"></i>
                                                                                                    </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </li>
                                                                                <li>
                                                                                    <figure>
                                                                                        <img src="/img/pf.jpg" alt="pf"/>
                                                                                    </figure>
                                                                                    <div className="content">
                                                                                        <h6>Santosh Khatri </h6>
                                                                                        <span>skhatri.np@gmail.com</span>
                                                                                    </div>
                                                                                    <form>
                                                                                        <div className="form-group">
                                                                                            <div className="custom-checkbox">
                                                                                                <div className="checkbox ">
                                                                                                    <label>
                                                                                                        <input type="checkbox" name="radioYes" /><i class="helper"></i>
                                                                                                    </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </li>
                                                                                <li>
                                                                                    <figure>
                                                                                        <img src="/img/pf.jpg" alt="pf"/>
                                                                                    </figure>
                                                                                    <div className="content">
                                                                                        <h6>Santosh Khatri </h6>
                                                                                        <span>skhatri.np@gmail.com</span>
                                                                                    </div>
                                                                                    <form>
                                                                                        <div className="form-group">
                                                                                            <div className="custom-checkbox">
                                                                                                <div className="checkbox ">
                                                                                                    <label>
                                                                                                        <input type="checkbox" name="radioYes" /><i class="helper"></i>
                                                                                                    </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </li>
                                                                                <li>
                                                                                    <figure>
                                                                                        <img src="/img/pf.jpg" alt="pf"/>
                                                                                    </figure>
                                                                                    <div className="content">
                                                                                        <h6>Santosh Khatri </h6>
                                                                                        <span>skhatri.np@gmail.com</span>
                                                                                    </div>
                                                                                    <form>
                                                                                        <div className="form-group">
                                                                                            <div className="custom-checkbox">
                                                                                                <div className="checkbox ">
                                                                                                    <label>
                                                                                                        <input type="checkbox" name="radioYes" /><i class="helper"></i>
                                                                                                    </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </li>
                                                                            </ul>
                                                                        </PerfectScrollbar>
                                                                    </div>
                                                                    }
                                                                    {this.state.teamTab && 
                                                                    <div className="thumb-list teamlist" style={{position:'relative', height:'250px'}}>
                                                                        <PerfectScrollbar>
                                                                        <ul>
                                                                            <li>
                                                                                <figure>
                                                                                    <img src="/img/pf.jpg" alt="pf"/>
                                                                                </figure>
                                                                                <div className="content">
                                                                                    <h6>Nuwakot </h6>
                                                                                    <span>Sanepal Nepal</span>
                                                                                </div>
                                                                                <form>
                                                                                    <div className="form-group">
                                                                                        <div className="custom-checkbox">
                                                                                            <div className="checkbox ">
                                                                                                <label>
                                                                                                    <input type="checkbox" name="radioYes" /><i class="helper"></i>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </li>
                                                                            <li>
                                                                                <figure>
                                                                                    <img src="/img/pf.jpg" alt="pf"/>
                                                                                </figure>
                                                                                <div className="content">
                                                                                    <h6>Santosh Khatri </h6>
                                                                                    <span>skhatri.np@gmail.com</span>
                                                                                </div>
                                                                                <form>
                                                                                    <div className="form-group">
                                                                                        <div className="custom-checkbox">
                                                                                            <div className="checkbox ">
                                                                                                <label>
                                                                                                    <input type="checkbox" name="radioYes" /><i class="helper"></i>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </li>
                                                                            <li>
                                                                                <figure>
                                                                                    <img src="/img/pf.jpg" alt="pf"/>
                                                                                </figure>
                                                                                <div className="content">
                                                                                    <h6>Santosh Khatri </h6>
                                                                                    <span>skhatri.np@gmail.com</span>
                                                                                </div>
                                                                                <form>
                                                                                    <div className="form-group">
                                                                                        <div className="custom-checkbox">
                                                                                            <div className="checkbox ">
                                                                                                <label>
                                                                                                    <input type="checkbox" name="radioYes" /><i class="helper"></i>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </li>
                                                                            <li>
                                                                                <figure>
                                                                                    <img src="/img/pf.jpg" alt="pf"/>
                                                                                </figure>
                                                                                <div className="content">
                                                                                    <h6>Santosh Khatri </h6>
                                                                                    <span>skhatri.np@gmail.com</span>
                                                                                </div>
                                                                                <form>
                                                                                    <div className="form-group">
                                                                                        <div className="custom-checkbox">
                                                                                            <div className="checkbox ">
                                                                                                <label>
                                                                                                    <input type="checkbox" name="radioYes" /><i class="helper"></i>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </li>
                                                                        </ul>
                                                                        </PerfectScrollbar>
                                                                    </div>
                                                                    }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                            }
                                            {this.state.replacePopup && <Zoom duration ={500} >
                                                <div className="fieldsight-popup open" >
                                                    <div className="popup-body">
                                                        <div className="card">
                                                            <div className="card-header main-card-header">
                                                                <h5>Replace</h5>
                                                                <span className="popup-close"  onClick={this.closePopup}><i className="la la-close"></i></span>
                                                            </div>
                                                            <div className="card-body">
                                                                <form className="edit-form" style={{position:'relative', height:'250px'}}>
                                                                    <PerfectScrollbar>
                                                                    <div className="form-group">
                                                                        <label>
                                                                            attach file
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

export default myForm;
