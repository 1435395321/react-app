import React from "react";

class Refs extends React.Component {
  constructor() {
    super();
    this.textRef = React.createRef();
  }

  getRef = () => {
    console.log(this.textRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.textRef}></input>
        <button onClick={this.getRef}>获取Ref</button>
      </div>
    );
  }
}
export default Refs;
