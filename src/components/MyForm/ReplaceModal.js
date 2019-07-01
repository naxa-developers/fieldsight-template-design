import React, { Component } from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';





class ReplaceModal extends Component {
    state = {

    }

    render() {
        console.log(this.props.previewUrl);
        return (
            <React.Fragment>

                <form>
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
                </form>

            </React.Fragment>
        );


    }
}

export default ReplaceModal;