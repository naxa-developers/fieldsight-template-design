import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Iframe from 'react-iframe';
import axios from 'axios'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { thisExpression } from '@babel/types';
// import ProjectTable from "../components/MyForm/ProjectTable";
// import MyformTable from '../components/MyForm/MyformTable';
// import UserSelectForm from '../components/MyForm/UserSelectForm';


class MyFormMain extends Component {

    render() {
        return (
            <React.Fragment>

                <div id="fieldsight-new" class="fieldsight-new">
                    <div id="main-container" class="minified">
                        <div class="container-fluid">

                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/fieldsight/organization-dashboard/13/">Teams</a></li>

                                    <li class="breadcrumb-item active" aria-current="page">Invitation</li>
                                </ol>
                            </nav>

                            <main id="main-content">

                            </main>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

}

export default MyFormMain;