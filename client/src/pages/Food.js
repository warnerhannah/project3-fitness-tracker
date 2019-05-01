import React, { Component } from "react";
import API from "../utils/API";
import withAuth from '../components/withAuth';
// import Calendar from "../components/Calendar"
// import Calories from "../components/Calories"
// import Weight from "../components/Weight"


class Food extends Component {
    state = {
        food: "",
        quantity: "",
        size: "",

        calories:""
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    checkInput = (e) => {
        e.preventDefault();

        if (!this.state.food || !this.state.quantity || !this.state.size) {
            alert("Please fill out all information!")
        }
    }

    checkSize = () => {
        if (this.state.size === "small" || this.state.size === "medium" || this.state.size === "large") {
            this.addFood()
        }
        else {
            alert("Please enter a size of small, medium, or large")
        }
    }

    addFood = () => {   
    }

    render() {
        return (
            <div className="container">
                <div className="messaging">
                    <h3>Input a New Food:</h3>
                    <form>
                        <p>
                            Please enter the food name:
                            <input
                                className="username"
                                onChange={this.handleInputChange}
                                name="food"
                            >
                            </input>
                        </p>
                        <p> Please the quantity consumed:
                            <input
                                className="message"
                                onChange={this.handleInputChange}
                                name="quantity"
                            >
                            </input>
                        </p>
                        <p> Please enter the size:
                            <input
                                className="message"
                                placeholder="small, medium, or large"
                                onChange={this.handleInputChange}
                                name="size"
                            >
                            </input>
                        </p>
                        <button
                            className="sendButton"
                            onClick={this.checkInput}
                        >Yum!</button>
                    </form>
                </div>

            </div>
        )
    }


};

export default withAuth(Food);