import React, { Component } from "react";
import API from "../utils/API";
import withAuth from '../components/withAuth';
import Calendar from "../components/Calendar"
import Calories from "../components/Calories"
import Weight from "../components/Weight"

class Home extends Component {
    state = {
        name: "",
        weight: "",
        inches: "",
        feet: "",
        age: ""
    }

    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
            console.log(res.data)
            this.setState({
                name: res.data.name,
                weight: res.data.weight,
                inches: res.data.inches,
                feet: res.data.feet,
                age: res.data.age
            })
        });
    }

    render() {
        return (
            <div>
                <div className="flex">
                    <div className="calendarClick">
                        <p>info when click on calendar</p>
                    </div>

                    <div className="calendar">
                        <p>calendar</p>
                        <Calendar />
                    </div>
                </div>
                <div className="stats">
                    <h3>My Stats</h3>
                    <div className="flex">
                        <p>Current Weight: {this.state.weight} lbs</p>
                        <p>Current Height: {this.state.feet}ft. {this.state.inches}in.</p>
                        <p>Current Age: {this.state.age} years</p>
                    </div>
                    <div className="flex">
                        <div className="graph">
                            <Weight />
                        </div>
                        <div className="graph">
                            <Calories />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default withAuth(Home);
