import React from 'react';

import East from "./East";
import South from "./South";
import West from "./West";


    class North extends React.Component {


        state = {
          name: ''
      
        }
        handleChange = event => {
            this.setState({ name: event.target.value });
        };
      
        render() {
          if (this.state.name === "north") {
            return (
              <North />
            
            );
          }
          if (this.state.name === "south") {
            return (
              <South />
            );
          }
      
          if (this.state.name === "east") {
            return (
              <East />
            );
          }
      
          if (this.state.name === "west") {
            return (
              <West />
            );
          }
          return ( 
           
            <div>
            
            <h1>Grod, the Conquerer</h1>
              <input onChange={this.handleChange} />
              <input type="submit" value="Submit" />
              <p>I am Grod from Zod. You are going NORTH!!</p>
        
      
      </div>
          );
        }
        
      }
  
  export default North;