import React, { Component } from "react";
import withAuth from './../components/withAuth';

class Resources extends Component {
 render() {
   return (
     <div>
       <h3>Fitness Resources:</h3>
       <div className="containerRes">
         <ul>
           <li>
             <a
               link="Stronger By Science"
               href="https://www.strongerbyscience.com/category/articles/"
             >
               Stonger By Science{" "}
             </a>
           </li>
           <li>
           <a link="Body Building" href="https://www.bodybuilding.com">
             BodyBuilding.com{" "}
           </a>
           </li>
           <li>
           <a link="Weightology" href="https://weightology.net">
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
