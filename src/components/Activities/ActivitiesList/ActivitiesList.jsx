import React, { Component } from 'react';
var slideIndex = 1;
 class ActivitiesList extends Component {
   constructor() {
     super();
     this.state = {
      

     }
   }
   


   render() {
     
    const {url} = this.props; 
    
    return (
       <li className="myslides" >
           <div className="myslides-main">
           <div className="myslides-image" style={{background:`url(${url})`}}></div>
          </div>
       </li>
         
         
       
      
     )
   }
 }

export default ActivitiesList;

