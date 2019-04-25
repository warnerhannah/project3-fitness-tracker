import React, { Component } from "react";
import API from "../utils/API";


class Stats extends Component {
    state = {
        height: "",
        weight: "",
        age: ""
    };

    componentDidMount() {
        // API.getUser(this.props.user.id).then(res => {
        //     this.setState({
        //         height: res.data.height,
        //         weight: res.data.weight,
        //         age: res.data.age
        //     })
        // });
    }

    render() {
        return (
            <div>
                <div>
                    {/* <h3>Height: {this.state.height}</h3>
                    <h3>Weight: {this.state.weight}</h3>
                    <h3>Age: {this.state.age}</h3> */}
                </div>
            </div>
        );
    };
}

export default Stats;