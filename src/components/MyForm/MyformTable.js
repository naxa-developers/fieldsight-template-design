import React, { Component } from 'react';
import axios from 'axios'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import FormShare from './formShare'



class MyformTable extends Component {

    state = {
        project_list: [],
        list: [],
        shareOption: false,

    }



    componentDidMount() {
        const url = 'https://fieldsight.naxa.com.np/fv3/api/myforms/';
        axios.get(url)

            .then(
                res => {
                    console.log("results", res)
                    this.setState({
                        list: res.data
                    })
                }
            ).catch(err => console.log("err", err))
    }


    render() {
        return (
            <React.Fragment>

                <div className="myform-table">
                   {/*  <div className="add-btn"><a href="#/" onClick={this.props.myFormPopup}>Add new <span><i className="la la-plus"></i></span></a></div> */}
                    <div className="table-wrapper" style={{ position: 'relative', height: '500px' }}>
                        <PerfectScrollbar>
                            <table id="myform_table" className="table-bordered table myform_table dataTable">
                                <thead>
                                    <tr>

                                        <th >Form Name</th>
                                        <th >Create Date</th>
                                        <th >Updated date</th>
                                        <th >Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.list.map((item, i) => (
                                        <FormShare key={i + 1}
                                            item={item}
                                            OpenTabHandler={this.props.OpenTabHandler}
                                            commonPopupHandler={this.props.commonPopupHandler}

                                        />
                                    ))}

                                </tbody>
                            </table>
                        </PerfectScrollbar>
                    </div>
                </div>

            </React.Fragment>

        );
    }

}

export default MyformTable;