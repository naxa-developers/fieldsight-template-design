import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

const sideNavRoutes = [
  { to: "/", path: "/pages/Response/", title: "General Forms", heading:"Library Forms" },
  { to: "/components/Responsed/ResponseScheduledForm", path: "/pages/Response/components/Responsed/ResponseScheduledForm", title: "Scheduled Forms" },
  {
    to: "/components/Responsed/ResponseStageForm",
    path: "/pages/Response/components/Responsed/ResponseStageForm",
    title: "Stage Form"
  },
  { to: "/components/Responsed/ResponseSurveyForm", path: "/pages/Response/components/Responsed/ResponseSurveyForm", title: "Survey Form" },
 
];

class ResponseSetting extends Component {
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
            <h5>{route.heading}</h5>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(ResponseSetting);
