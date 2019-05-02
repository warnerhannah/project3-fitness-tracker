import React, { Component } from 'react';

import API from './../utils/API';

class UpdateCalories extends Component {

    state = {
     caloriesConsumed: ""
    };
  
    componentDidMount() {
      API.getUser(this.props.user.id).then(res => {
       
        this.setState({
          caloriesConsumed: res.data.caloriesConsumed
        
         
        })
      });
    }
  
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
    }
  

  
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