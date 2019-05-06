import React, { Component } from 'react';
import API from './../utils/API';


const count = 0;
class UpdateCalories extends Component {
  
  state = {
    calData: [],
    count: []
  };
  

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
       
      this.setState({
        caloriesConsumed: res.data.caloriesConsumed
        
         
      })
    });
  };
  loadCalories = () => {
    API.getCalories().then(res => {
      const newConsumed = res.data.map(consumed => consumed.consumed);
      const newBurned = res.data.map(burned => burned.burned);
      this.setState({
        calData: newConsumed,
        burnData: newBurned,
         
      })
    });
        
   
  };
  updateUser = () => {
      // console.log(this.props.user)
      console.log(this.state.name)
    API.updateUser(this.props.user.id, this.state.caloriesConsumed)
      .then(res => {
          console.log("saved!")
          this.setState({
          caloriesConsumed: res.data.caloriesConsumed
      })
    })
  };
  // handleIncrement = () => {
  //   // We always use the setState method to update a component's state
  //   for(let i = 0; i < calData.length; i++)
    
  //   this.setState({ count: this.state.caloriesConsumed[i] + this.state.count });
  // };
  render() {
      return (
        <div className="container Profile">
          <h1>Your Profile</h1>
          
          <div>
            <p>Calories Consumed: <input
              className="profile"
              name="caloriesConsumed"
              value={this.state.caloriesConsumed}
              onChange={this.handleInputChange}
            ></input>
              lbs.</p>
          </div>
  
          <button
            onClick={this.updateUser}
          >Save</button>
          {/* <Link to="/">Go home</Link> */}
        </div>
      )
    }
  }
  
  export default UpdateCalories;