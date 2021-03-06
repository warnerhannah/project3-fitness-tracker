import React, { Component } from "react";
import Weight from "../components/Weight";
import withAuth from "./../components/withAuth";
import API from "../utils/API";

class displayWeight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      date: "",
      data: [],
      labels: []
    };
  }
  componentDidMount() {
    this.loadWeight();
  }

  loadWeight = () => {
    API.getWeight(this.props.user.id).then(res => {
      const newWeight = res.data.map(user => user.weight)
      const newLabels = res.data.map(user => user.date)
      const currentWeight = newWeight[newWeight.length -1]

      this.setState({
        data: newWeight,
        labels: newLabels,
        weight: currentWeight
      });
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.createWeight(this.props.user.id, this.state.weight, this.state.date)
      .then(response => this.loadWeight())
      .catch(err => {
        console.log(err);
      });
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
            <Weight data={this.state.data} labels={this.state.labels} weight={this.state.weight}/>
          </div>
        </div>

        <div className="messaging">
          <h3>Add A Weight Data Point:</h3>
          <div>
            <div>
              <form>
                <p>
                  {" "}
                  Weight:  
                  <input
                    className="cal"
                    onChange={this.handleInputChange}
                    name="weight"
                    size="35"
                  />
                  lbs.
                </p>
                <hr/>
                <p>
                  {" "}
                  Date Recorded:
                  <input
                    className="cal"
                    onChange={(event) => this.setState({date: event.target.value})}
                    name="date"
                    type="date"
                  />
                </p>
                <button className="btn btn-primary sendButton" onClick={this.handleFormSubmit}>
                  Add It
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(displayWeight);
