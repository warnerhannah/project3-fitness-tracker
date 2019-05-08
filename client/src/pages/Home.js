import React, { Component } from "react";
import API from "../utils/API";
import withAuth from "../components/withAuth";
import Calendar from "../components/Calendar";
import Calories from "../components/Calories";
import Weight from "../components/Weight";
import Splash from "../pages/Splash";

class Home extends Component {
  state = {
    name: "",
    weight: "",
    inches: "",
    feet: "",
    age: "",
    data: [],
    labels: [],
    calData: [],
    burnData: [],
    calLabels: []
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      // console.log(res.data)
      this.setState({
        name: res.data.name,
        inches: res.data.inches,
        feet: res.data.feet,
        age: res.data.age
      });
    })
    .catch(console.log)
    this.loadWeight();
    this.loadCalories();
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

  loadCalories = () => {
    API.getCalories(this.props.user.id).then(res => {
      const newConsumed = res.data.map(consumed => consumed.consumed);
      const newBurned = res.data.map(burned => burned.burned);
      const newLabels = res.data.map(labels => labels.date);
      this.setState({
        calData: newConsumed,
        burnData: newBurned,
        calLabels: newLabels
      });
    })
    .catch(console.log)
    ;
  };

  render() {
    return (
      <div className="container maincontentcontainer">
        
        <div className="stats">
           {/* <div className="welcome">
           Welcome, {this.state.name}
           </div> */}
             <h3 id="statsTitle"> S T A T S </h3>
           
        
           <div id="statsMain" className="flex">
             <p>
               Current Weight: {this.state.data[this.state.data.length - 1]} lbs
             </p>
             <p>
               Height: {this.state.feet}ft. {this.state.inches}in.
             </p>
             <p>Current Age: {this.state.age} years</p>
           </div>
           <div className="flex">
             <div className="graph">
               <div className="graphTitle">
                 <p id="weightProgress">Weight Progress</p>
                 <a href="/weight">
                   <i className="fas fa-edit" />
                 </a>
               </div>
               <Weight data={this.state.data} labels={this.state.labels} />
             </div>
             <div className="graph">
               <div className="graphTitle">
                 <p id="calConBunred">Calories Consumed/Burned</p>
                 <a href="/calories">
                   <i className="fas fa-edit" />
                 </a>
               </div>
               <Calories
                 data={this.state.calData}
                 burned={this.state.burnData}
                 labels={this.state.calLabels}
               />
             </div>
           </div>
         </div>

        <div className="calendar">
          <h3>My Workout Schedule</h3>
          <div className="calDiv">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Home);
