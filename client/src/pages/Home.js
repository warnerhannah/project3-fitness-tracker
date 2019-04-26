import React, { Component } from "react";
import API from "../utils/API";

class Home extends Component {

    
    render() {
        return (
            <div>
                <div className="flex">
                    <div className="calendarClick">
                        <p>info when click on calendar</p>
                    </div>

                    <div className="calendar">
                        <p>calendar</p>
                    </div>
                </div>
            </div>
        );
    };
}

export default Home;
