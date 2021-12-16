import React from "react";

class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0,
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.mouseMove);
  }

  // 组件卸载时移出事件绑定
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.mouseMove);
  }

  mouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  render() {
    return this.props.children(this.state);
  }
}

export default Mouse;
