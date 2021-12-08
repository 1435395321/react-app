import React from "react";
import ReactDOM from "react-dom";
// import Hello from "./Hello/Hello";
import Comments from "./Comments";
// class Demo extends React.Component {
//   static getSay() {
//     return "abc";
//   }
//   render() {
//     return <div>{this.props.name}</div>;
//   }
// }
// const element = <Hello name="wang"></Hello>;
const element = <Comments></Comments>;

ReactDOM.render(element, document.getElementById("root"));
