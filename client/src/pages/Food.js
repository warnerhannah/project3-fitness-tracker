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

        calories: ""
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
        console.log("we got here!");
    }

    // checkInput = (e) => {
    //     e.preventDefault();

    //     // if (!this.state.food || !this.state.quantity || !this.state.size) {
    //     //     alert("Please fill out all information!")
    //     // }
    //     // else {
    //         this.checkSize()
    //     // }
    // }

    // checkSize = () => {
    //     if (this.state.size === "small" || this.state.size === "medium" || this.state.size === "large") {
    //         this.addFood()
    //     }
    //     else {
    //         alert("Please enter a size of small, medium, or large")
    //     }
    // }



    addFood = () => {
        API.getFood(this.state.quantity, this.state.size, this.state.food)
            .then(res => {
                this.setState({
                    food: "",
                    quantity: "",
                    size: "",
                })
                // pull food data to display caloric intake
            })
    }

    handleSubmit(event) {
        alert('You added: ' + this.state.food);
        event.preventDefault();
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