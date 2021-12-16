import React from "react";

const { Consumer } = React.createContext();

class Brith extends React.Component {
  handlerCount = () => {
    this.props.changCount();
  };
  render() {
    return (
      <div>
        <h3> Brith</h3>
        <Node></Node>
      </div>
    );
  }
}
const Node = (props) => {
  return (
    <div>
      <Consumer>
        {(data) => (
          <div>
            <h3> 无下限通道::{data}</h3>
          </div>
        )}
      </Consumer>
    </div>
  );
};

export default Brith;
