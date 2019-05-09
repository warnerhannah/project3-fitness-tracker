import React, { Component } from "react";
import API from "../utils/API";
import withAuth from '../components/withAuth';



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
                this.displayMessages(res)
            })
    }

    displayMessages = () => {
        API.displayMessages(this.state.myusername)
            .then(res => {
                // console.log(res.data)
                this.setState({
                    messages: res.data.reverse()
                })
            })
    }

    markRead = (id) => {
        API.markRead(id)
            .then(res => {
                this.displayMessages()
            })
    }

    sendMessage = (e) => {
        e.preventDefault();
        // console.log(this.state.username)
        API.sendMessage(this.state.username, this.state.message, this.state.myusername)
            .then(res => {
                alert("Message sent!")
                this.setState({
                    username: "",
                    message: "",
                })
            })
    }

    deleteMessage = (id) => {
        API.deleteMessage(id)
            .then(res => {
                this.displayMessages()
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
                            className="btn btn-primary sendButton"
                            onClick={this.sendMessage}
                        >Send it!</button>
                    </form>
                </div>

                <div className="messaging scroll">
                    <h3>Your Messages: (click to mark as read)</h3>
                    {this.state.messages.length > 0 ?
                        (
                            this.state.messages.map(message => (
                                <div
                                    key={message.id}
                                    className={message.read ? "read" : "unread"}
                                    onClick={() => this.markRead(message._id)}
                                >
                                    <i
                                        key={message.id}
                                        className="fas fa-trash-alt"
                                        onClick={() => this.deleteMessage(message._id)}
                                    ></i>
                                    <p>{message.message}</p>
                                    <p className="from">From: {message.sender}</p>
                                </div>
                            ))
                        )
                        :
                        (<h5 className="none">No Messages!</h5>)}

                </div>
            </div>
        );
    };
}

export default withAuth(Message);