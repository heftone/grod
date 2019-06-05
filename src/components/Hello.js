import React from 'react';




function UserGreeting(props) {
    return <h1>You are going WEST!!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>TRY AGAIN!!</h1>;
  }

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn === "west") {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  class Hello extends React.Component {


    render() {
   return (
<div>


<Greeting isLoggedIn={"west"} />

</div>

   );
  
   }

  }
  
  
  export default Hello;
