import React from "react";
import ReactDOM from "react-dom";
// import Hello from "./Hello/Hello";
// import Comments from "./Comments";
// import App from "./Provoder/app";
// import Life from "./life/index";
// import Mouse from "./Component/Mouse/index";
import UseMouse from "./UseMouse";

// const element = <Hello name="wang"></Hello>;
// const element = <Communication></Communication>;
const element = <UseMouse a='12' />;
ReactDOM.render(element, document.getElementById("root"));
