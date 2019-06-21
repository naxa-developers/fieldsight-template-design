import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import '../scss/layout/breadcrumb.scss';
// import styled from 'styled-components';
// import {ButtonContainer} from "./button";
class Breadcrumb extends Component {
  render() {
    return (
      <nav aria-label="breadcrumb" role="navigation">
          <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/fieldsight/organization/">Teams</a></li>
              <li className="breadcrumb-item"><a href="/fieldsight/organization-dashboard/13/">Build Change</a></li>
              <li className="breadcrumb-item active" aria-current="page">DFID 31 District Retrofitting</li>
          </ol>
      </nav>
    );
  }
}


export default Breadcrumb;



