import React from "react";
import ReactDOM from "react-dom";

class Welcome extends React.Component {
  render() {
    return <h1>Welcome to my TODO list app</h1>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById("app"));