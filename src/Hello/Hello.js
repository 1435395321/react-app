import React from "react";
import From from "../From/Form";
import Refs from "../Refs/index";
class Hello extends React.Component {
  constructor() {
    super();
    this.bind();
  }
  state = {
    count: 0,
    test: "w",
  };

  bind() {
    this.demo = this.demo.bind(this);
  }

  demo() {
    this.setState({
      count: this.state.count + 1,
      test: "wang",
    });
  }

  render() {
    return (
      <div>
        <h4>
          {this.state.count}
          {this.state.test}
        </h4>
        <button onClick={this.demo}>按钮</button>
        <From></From>
        <Refs></Refs>
      </div>
    );
  }
}
export default Hello;
