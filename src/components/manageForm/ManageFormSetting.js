import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

const sideNavRoutes = [
  { to: "/", path: "/pages/ManageForms/", title: "General Forms" },
  { to: "/components/manageForm/ManageScheduledForm", path: "/pages/ManageForms/components/manageForm/ManageScheduledForm", title: "Scheduled Forms" },
  {
    to: "/components/manageForm/ManageStageForm",
    path: "/pages/ManageForms/components/manageForm/ManageStageForm",
    title: "Stage Form"
  },
  { to: "/components/manageForm/ManageSurveyForm", path: "/pages/ManageForms/components/manageForm/ManageSurveyForm", title: "Survey Form" },
 
];

class ManageFormSetting extends Component {
  render() {
    const {
      location: { pathname }
    } = this.props;
    return (
      <ul className="nav nav-tabs flex-column border-tabs">
        {sideNavRoutes.map((route, i) => (
          <li className="nav-item" key={i}>
            <Link
              to={`${this.props.match.path}${route.to}`}
              className={
                pathname === route.path ? "nav-link active" : "nav-link"
              }
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(ManageFormSetting);
