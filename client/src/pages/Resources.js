import React, { Component } from "react";
// import API from "../utils/API";

class Resources extends Component {
  render() {
    return (
      <div className="containerRes">
        <h3 className="fitresources">Fitness Resources:</h3>
        <div>
        <ul>
          <li>
            <a
              link="Stronger By Science"
              href="https://www.strongerbyscience.com/category/articles/" target="_blank"
            >
              Stonger By Science{" "}
            </a>
          </li>
          <li>
            <a link="Body Building" href="https://www.bodybuilding.com" target="_blank">
              BodyBuilding.com{" "}
            </a>
          </li>
          <li>
            <a link="Weightology" href="https://weightology.net" target="_blank">
              Weightology{" "}
            </a>
          </li>
        </ul>
        </div>
      </div>
    );
  }
}

export default Resources;
