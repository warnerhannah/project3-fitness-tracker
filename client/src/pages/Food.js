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

        // if (!this.state.food || !this.state.quantity || !this.state.size) {
        //     alert("Please fill out all information!")
        // }
        // else {
            
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
                calories: res.data.calories
            })
            // pull food data to display caloric intake
            //res.data.calories
        })
    }

    render() {
        return (
            <div>
                <div className="messaging">
                <p>Want to know the caloric value of a food?</p>
                    <h3>Search a Food:</h3>
                    <form>
                        <p>
                            Please enter the food name:
                            <input
                                className="username"
                                value={this.state.food}
                                onChange={this.handleInputChange}
                                name="food"
                            >
                            </input>
                        </p>
                        <p> Please the quantity consumed:
                            <input
                                className="message"
                                value={this.state.quantity}
                                onChange={this.handleInputChange}
                                name="quantity"
                            >
                            </input>
                        </p>
                        <p> Please enter the size:
                            <input
                                className="message"
                                value={this.state.size}
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

                    <br></br>

                    <p className="read">Calories Result: {this.state.calories}</p>
                </div>

            </div>
        )
    }


}

export default withAuth(Food);