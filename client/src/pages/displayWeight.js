import React, { Component } from "react";
import Weight from "../components/Weight";
import API from "../utils/API";


class displayWeight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      date: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.createWeight(this.state.weight, this.state.date)
      .then()
      .catch(err => alert(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="messaging">
          <h3 className="none">Weight Tracking</h3>
          <div className="graphdata" style={{ position: "relative" }}>
            <Weight />
          </div>
        </div>

        <div className="messaging">
          <h3>Add A Weight Data Point:</h3>
          <div>
            <div>
              <form className="flexIt">
                <p> Weight:
                <input
                    className="cal"
                    onChange={this.handleInputChange}
                    name="weight"
                  >
                  </input>
                </p>
                <p> Date Recorded:
                <input
                    className="cal"
                    onChange={this.handleInputChange}
                    name="date"
                  >
                  </input>
                </p>
                <button
                  className="sendButton"
                  onClick={this.handleFormSubmit}
                >Add It</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default displayWeight;