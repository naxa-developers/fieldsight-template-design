import React, {Component} from "react";


class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
          classNames: "",
          myVal: false
        };
      }
      handleClick() {
        this.setState({ myVal: true, classNames: "open" });
      }
      handleClose() {
        this.setState({ classNames: "fieldsight-popup", myVal: false });
      }
        render(){
            return(
                <React.Fragment>
                    {this.state.myVal === true ? (
                        <div className={`fieldsight-popup{this.state.className}`} >
                            <div className="popup-body">
                                <div className="card">
                                    <div className="card-header main-card-header">
                                        <h5>{this.props.title}</h5>
                                        <span onClick={this.handleClose} className="popup-close"><i className="fa fa-close"></i></span> 
                                    </div>
                                    <div className="card-body">
                                        {this.props.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                        ) : (
                            ""
                    )}
                </React.Fragment>
            )
        }
}
export default Modal;
