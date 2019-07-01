import React, { Component } from "react";
import axios from "axios";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { timingSafeEqual } from "crypto";

class ShareModal extends Component {
  state = {
    userList: []
  };

  componentDidMount() {
    const baseurl = "https://fieldsight.naxa.com.np/fv3/api/form";
    const url = baseurl + "/" + this.props.modalTypes + "/";
    console.log(url);

    axios
      .get(url)
      //   .then(res => res.json())
      .then(res => {
        const modifiedUser = res.data.map(user => ({
          ...user,
          checkbox: false
        }));

        this.setState(
          {
            userList: modifiedUser
          },
          () => console.log("user_share", this.state)
        );
      })
      .catch(err => console.log("err", err));
  }

  checkboxHandler = (e, checkboxId) => {
    const newUserList = [...this.state.userList];
    const selectedUser = newUserList.find(user => user.id === +checkboxId);

    selectedUser.checkbox = !selectedUser.checkbox;
    this.setState({
      userList: newUserList
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const checkedList = this.state.userList
      .map(user => (user.checkbox == true ? user.id : null))
      .filter(Boolean);

    const id = this.props.modalDatas;
    const url = this.props.shareUrls;
    axios
      .post(url, { id_string: id, users: checkedList })
      .then(res => {
        console.log(res.status);
        console.log(res.data.message);
       
      })
      .catch(err => console.log("err", err));
  };

  render() {
    const type = this.props.modalTypes;

    //console.log(this.props.modalTypes)
    return (
      <div className="thumb-list userlist">
        <form onSubmit={this.onSubmit}>
          <ul style={{ position: "relative", height: "450px" }}>
            <PerfectScrollbar>
              {this.state.userList.map((user, i) => (
                <li key={user.id}>
                  <figure>
                    <img
                      src={type === "users" ? user.profile_picture : user.logo}
                      alt="image"
                    />
                  </figure>
                  <div className="content">
                    <h6>{type === "users" ? user.first_name : user.name} </h6>
                    {type == "users" ? <span>{user.email}</span> : null}
                  </div>
                  <div className="form-group checkbox-btn">
                    <div className="custom-checkbox">
                      <div className="checkbox ">
                        <label>
                          <input
                            type="checkbox"
                            onChange={e => this.checkboxHandler(e, user.id)}
                            checked={user.checkbox}
                          />
                          <i className="helper" />
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </PerfectScrollbar>
          </ul>
          <div className="form-group mrt-30 pull-right">
            <button type="submit" className="fieldsight-btn">
              Share
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ShareModal;
