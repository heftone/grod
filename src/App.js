import React from 'react';

import North from "./components/North";
import South from "./components/South";
import East from "./components/East";
import West from "./components/West";



class App extends React.Component {


  state = {
    name: '',
    northCount: 0,
    southCount: 0,
    eastCount: 0,
    westCount: 0

  }

  handleChange = event => {
      this.setState({ name: event.target.value });
  };

  handleSubmit(event) {
     
    
}

  IncrementItem = () => {
    this.setState({ northCount: this.state.northCount + 1 });
  };

  DecreaseItem = () => {
    this.setState({ northCount: this.state.northCount - 1 });
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
        <input value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
  

</div>
    );
  }
  
}




export default App;
 // eslint-disable-next-line
{/*
  
 <input onChange={this.handleChange} />

         this.northCount = this.IncrementItem,
        alert(this.northCount),


  ################# THIS IS THE FORM ########################

      <form onSubmit={this.handleSubmit}>
      <label>
        Type Here:
        <input value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
     
    </form>

    ###################################################################


    ############### THESE ARE OLD COMPONENTS ############################

    <Header />
    <Story1 />
    <Story2 />
    <Story3 />

    ###################################################################

    ############# THIS GOES BEFORE FINAL RENDER COMPONENT #############

    const Story1 = () => (

  <p>Here is story 1.</p>
);

const Story2 = () => (

  <p>Here is story 2.</p>
);

const Story3= () => (

  <p>Here is story 3.</p>
);

class Header extends React.Component {
  render() {
    
    return (
    <div><h1>"The most amazing adventur game in the world!"</h1></div>
    );
  }
}

###################################################################

    
*/}

