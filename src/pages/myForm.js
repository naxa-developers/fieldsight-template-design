import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Iframe from 'react-iframe';
import axios from 'axios'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { thisExpression } from '@babel/types';
import ProjectTable from "../components/MyForm/ProjectTable";
import MyformTable from '../components/MyForm/MyformTable';
import UserSelectForm from '../components/MyForm/UserSelectForm';
// import Axios from 'axios';
const initialState = {
    myTab: false, projectTab: false
}

const popupState = {
    previewPopup: false, sharePopup: false, replacePopup: false, myformPopup: false
}

const userState = {
    userTab: false, teamTab: false
}

class PreviewModal extends Component {
    state = {

    }

    render() {
        console.log(this.props.selected_preview);
        return (
            <React.Fragment>

                <PerfectScrollbar>
                    <Iframe url={this.props.selected_preview}
                        // width="450px"
                        height="100%"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative" />
                </PerfectScrollbar>

            </React.Fragment>
        );


    }
}




class myForm extends Component {
    state = {
        list: [],
        project_list: [],
        myTab: true,
        myformsharelink: null,
        projectTab: false,
        previewPopup: false,
        sharePopup: false,
        replacePopup: false,
        userTab: true,
        teamTab: false,
        toggleMyform: false,
        selectedmodal: PreviewModal
    }
    toggleTab = (e, type) => {

        this.setState((prevState) => ({
            ...initialState,
            [`${type}Tab`]: true
        }));
    }
    openTab = (e, link) => {
        this.setState((linkState) => ({
            ...userState,
            [`${link}Tab`]: true
        }));
    }
    
    togglePopup = (e, type, selected_preview) => {

        this.setState((prevState) => ({
            ...popupState,
            [`${type}Popup`]: true,
            selected_preview

        }));
    }

    closePopup = () => {
        this.setState({
            previewPopup: false, sharePopup: false, replacePopup: false
        });
    }
    myFormPopup = () => {
        this.setState({
            toggleMyform: !this.state.toggleMyform
        });
    }




    opentabhandler = (e, url) => {

        window.open(url, '_blank');

    }


    globalshare = (url, id) => {

        console.log(this.state.myformsharelink);
        //  console.log(id);
        axios
            .post(url, { id_string: id })
            .then(res => {
                console.log(res.data.share_link)
                if (res.status === 201) {

                    this.setState({
                        myformsharelink: res.data.share_link,
                        toggleMyform:true
                    })
                }else{

                    this.setState({
                        myformsharelink: null
                    })

                }
                
            })
            .catch(err => console.log("err", err));

            console.log(this.state.myformsharelink);
    }





    render() {
        return (
            <React.Fragment>
                <main id="main-content">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="right-content no-bg">
                                <div className="card" style={{ minHeight: this.props.height }}>
                                    <div className="card-body myform-content">
                                        <div className="myform-header">
                                            <ul className="nav nav-tabs " id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className={this.state.myTab ? "nav-link active" : "nav-link"} href={`#/`} onClick={(e) => this.toggleTab(e, 'my')}>My forms</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={this.state.projectTab ? "nav-link active" : "nav-link"} href={`#/`} onClick={(e) => this.toggleTab(e, 'project')}>Project forms</a>
                                                </li>
                                            </ul>

                                        </div>
                                        <div className="tab-content">
                                            <div className="mrt-30">
                                                {this.state.myTab &&
                                                    <MyformTable 
                                                    togglePopup={this.togglePopup} 
                                                    opentabhandler={this.opentabhandler} 
                                                    globashare={this.globalshare} 
                                                    myFormPopup={this.myFormPopup}
                                                    
                                                    />
                                                }
                                                {this.state.toggleMyform && <Zoom duration={500} >
                                                    <div className="fieldsight-popup open" id="add-data">
                                                        <div className="popup-body">
                                                            <div className="card">
                                                                <div className="card-header main-card-header">
                                                                    <h5>{this.state.myformsharelink}</h5>
                                                                    <span className="popup-close" onClick={this.myFormPopup}><i className="la la-close"></i></span>
                                                                </div>
                                                                <div className="card-body">
                                                                    <form className="floating-form">
                                                                        <div className="form-group">
                                                                            <input type="text" class="form-control" required="" name="attribute" />
                                                                            <label for="input">Form</label>
                                                                        </div>
                                                                        <div className="form-group pull-right no-margin">
                                                                            <button type="submit" class="fieldsight-btn">Save</button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Zoom>
                                                }
                                            </div>
                                            <div className="mrt-30">
                                                {this.state.projectTab &&
                                                    <div className="project-table">
                                                        <ProjectTable togglePopup={this.togglePopup} opentabhandler={this.opentabhandler}
                                                        />

                                                    </div>
                                                }
                                            </div>
                                            {this.state.previewPopup && <Zoom duration={500} >
                                                <div className="fieldsight-popup open" id="add-data">
                                                    <div className="popup-body">
                                                        <div className="card">

                                                            <div className="card-header main-card-header">
                                                                <h5>Preview</h5>
                                                                <span className="popup-close" onClick={this.closePopup}><i className="la la-close"></i></span>
                                                            </div>
                                                            <div className="card-body" style={{ position: 'relative', height: '312px' }}>

                                                                <this.state.selectedmodal 
                                                                
                                                                selected_preview={this.state.selected_preview}
                                                                
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>

                                            }
                                            {this.state.sharePopup && <Zoom duration={500} >
                                                <div className="fieldsight-popup open" >
                                                    <div className="popup-body">
                                                        <div className="card">
                                                            <div className="card-header main-card-header">
                                                                <h5>Share</h5>
                                                                <span className="popup-close" onClick={this.closePopup}><i className="la la-close"></i></span>
                                                            </div>
                                                            <div className="card-body">
                                                                <ul className="nav nav-tabs ">
                                                                    <li className="nav-item">
                                                                        <a className={this.state.userTab ? "nav-link active" : "nav-link"} href={`#/`} onClick={(e) => this.openTab(e, 'user')}>Users</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className={this.state.teamTab ? "nav-link active" : "nav-link"} href={`#/`} onClick={(e) => this.openTab(e, 'team')}>Teams</a>
                                                                    </li>
                                                                </ul>
                                                                {this.state.userTab &&
                                                                    <div className="thumb-list userlist" style={{ position: 'relative', height: '250px' }}>
                                                                        <PerfectScrollbar>
                                                                            <UserSelectForm />
                                                                        </PerfectScrollbar>

                                                                    </div>
                                                                }
                                                                {this.state.teamTab &&
                                                                    <div className="thumb-list teamlist" style={{ position: 'relative', height: '250px' }}>
                                                                        <PerfectScrollbar>
                                                                            <UserSelectForm />
                                                                        </PerfectScrollbar>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Zoom>
                                            }
                                            {this.state.replacePopup && <Zoom duration={500} >
                                                <div className="fieldsight-popup open" >
                                                    <div className="popup-body">
                                                        <div className="card">
                                                            <div className="card-header main-card-header">
                                                                <h5>Replace</h5>
                                                                <span className="popup-close" onClick={this.closePopup}><i className="la la-close"></i></span>
                                                            </div>
                                                            <div className="card-body">
                                                                <form className="edit-form" style={{ position: 'relative', height: '250px' }}>
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

                {/* <UserList user={this.state.list} />*/}
            </React.Fragment>
        );
    }
}

export default myForm;

