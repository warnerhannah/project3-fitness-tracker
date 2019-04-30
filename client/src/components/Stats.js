import React, { Component } from "react";
import API from "../utils/API";
import withAuth from './../components/withAuth';


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
                <p>This is the stats</p>
            </div>
        );
    };
}

export default withAuth(Stats);