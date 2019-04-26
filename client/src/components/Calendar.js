import React, { Component } from "react";
import API from "../utils/API";

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

export default Calendar;