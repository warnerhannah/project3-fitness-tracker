import React, { Component } from "react";
import withAuth from './../components/withAuth';
import API from './../utils/API';

class EditWeight extends Component {
    state = {
      
        weight: "",
      
      };
      componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
         
          this.setState({
    
            weight: res.data.weight
           
          })
        });
      }
      updateUser = () => {
        // console.log(this.props.user)
        console.log(this.state.name)
        API.updateUser(this.props.user.id, this.state.weight)
          .then(res => {
            console.log("saved!")
            this.setState({
            
              weight: res.data.weight
            
            })
          })
      }
      render(){
          return(
              
          )
      }
}


 
export default withAuth(EditWeight);