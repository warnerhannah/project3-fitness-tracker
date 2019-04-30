import React, { Component } from "react";
// import API from "../utils/API";
import withAuth from './../components/withAuth';

class Calendar extends Component {
    componentDidMount () {
        console.log("it works")
    }
    render() {
        return (
            <div>
                <p>This is the calendar</p>
            </div>
        );
    };
}

export default withAuth(Calendar);