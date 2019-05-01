import React, { Component } from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";
import withAuth from './../components/withAuth';
// import API from "../utils/API";
import Calendar from "../components/Calendar"

class displayCalendar extends Component {

    state = {
        today:""

    }


    render() {
        return (
            <div className="container">
                <div className="messaging">
                    <Calendar />
                </div>
                <div className="messaging">
                <h3 className="none">Today's Workout Schedule:</h3>
                <p>{this.state.today}</p>
                </div>
            </div>
        )
    }
}

export default withAuth(displayCalendar);


