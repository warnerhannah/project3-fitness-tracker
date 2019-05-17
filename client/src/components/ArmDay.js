import React, { Component } from "react";
import { Link } from "react-router-dom";
class ArmDay extends Component {
  state = {};
  render() {
    return (
      <div className="container margin-top">
        <div className="messaging">
          <h1>ARM DAY</h1>
          <table>
            <tr>
              <th>DAY 1</th>
              <th>SETS</th>
              <th>REPS</th>
              <th>REST</th>
              <th>NOTES</th>
            </tr>
            <tr>
              <td>CLOSE GRIP BENCH PRESS</td>
              <td>3</td>
              <td>6-8</td>
              <td>3.0</td>
              <td>SHOULDER WIDTH GRIP, TOUCH BAR TO CHEST WITH SLIGHT PAUSE</td>
            </tr>
            <tr>
              <td>MANCHINE PREACHER CURLS</td>
              <td>2</td>
              <td>12-15</td>
              <td>1.0</td>
              <td>
                PREACTIVATION, SMOOTH AND CONTROLLED REPS, GETA SLIGHT PUMP WITH
                LIGHT WEIGHT
              </td>
            </tr>
            <tr>
              <td>BAYESIAN CABLE CURL</td>
              <td>3</td>
              <td>12-15</td>
              <td>1.0</td>
              <td>
                FACE AWAY FROM CABLE MACHINE, FEEL STRECH AT BOTTOM END ROM
              </td>
            </tr>
            <tr>
              <td>STANDING EZ BAR CURL</td>
              <td>4</td>
              <td>6-8</td>
              <td>3.0</td>
              <td>
                2 SETS WIDER GRIP, 2 SETS SHOULDER WIDTH, LAST SET TAKEN TO
                FAILURE, 1-2 EFFECTIVE CHEAT REPS AT END OF SET
              </td>
            </tr>
            <tr>
              <td>TRICEP PRESSDOWN</td>
              <td>4</td>
              <td>10-12</td>
              <td>2.0</td>
              <td>UES BAR ATTACHMENT, 2 SETS WIDE, 2 SETS NARROW, KEEP ELBOWS LOCKED IN PLACE, MINIMIZE SWINGING</td>
            </tr>
            <tr>
              <td>OVERHEAD ROPE TRICEP EXTENSION</td>
              <td>2</td>
              <td>12-15</td>
              <td>1.0</td>
              <td>PERFORM BOTH ARMS AT ONCE, PRESS ROPW APART AT THE TOP END ROM</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default ArmDay;
