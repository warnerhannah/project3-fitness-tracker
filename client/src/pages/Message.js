import React, { Component } from "react";
import API from "../utils/API";
import withAuth from '../components/withAuth';
// import Calendar from "../components/Calendar"
// import Calories from "../components/Calories"
// import Weight from "../components/Weight"


class Message extends Component {
    state = {
        myusername: "",
        messages: [],

        username: "",
        message: "",
    }


    componentDidMount() {
        API.getUser(this.props.user.id)
        .then(res => {
          this.setState({
            myusername: res.data.username,
          })
        })
        .then(res => {
            API.displayMessages(this.state.myusername)
            .then(res => {
                // console.log(res.data)
                this.setState({
                    messages: res.data
                })
            })  
        })
      }


    sendMessage = (e) => {
        e.preventDefault();
        // console.log(this.state.username)
        API.sendMessage(this.state.username, this.state.message)
        .then(res => {
            alert("Message sent!")
          this.setState({
            username: "",
            message: "",
          })
        })
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="container">
                <div className="messaging">
                <h3>Send A Motivational Message To Your Friends!</h3>
                    <form>
                        <p>
                            Please enter their username: <input
                                className="username"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                            >
                            </input>
                        </p>
                        <p> Please enter your message: <input
                                className="message"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                name="message"
                            >
                            </input>
                        </p>
                        <button
                        className="sendButton"
                        onClick={this.sendMessage}
                        >Send it!</button>
                    </form>
                </div>

                <div className="messaging">
                <h3>Your Messages:</h3>
                    
                </div>

            </div>
        );
    };
}

export default withAuth(Message);