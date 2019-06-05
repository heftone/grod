import React from 'react';

import North from "./North";
import East from "./East";
import West from "./West";


    class South extends React.Component {


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

              <p>You are going SOUTH!!</p>
        
      
      </div>
          );
        }
        
      }
  
  export default South;