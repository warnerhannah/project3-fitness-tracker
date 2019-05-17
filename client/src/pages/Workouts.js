import React, { Component } from "react";
import withAuth from "./../components/withAuth";
import API from "../utils/API";
import Warmup from "../components/WarmUp";
import { Link } from "react-router-dom";

class Workouts extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Warmup />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8" >
          {this.props.children}
          <Link to="armday" className="btn btn-success">ARM DAY</Link>
          <Link to="legday" className="btn btn-success">LEG DAY</Link>
          <Link to="chestback" className="btn btn-success">CHEST  BACK DAY</Link>
          </div>
          <div className="col-md-4" >
            <h1>hello world</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Workouts);
