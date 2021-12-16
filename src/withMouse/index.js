import React from "react";
function withMouse(WrappedCompoent) {
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0,
    };

    componentDidMount() {
      window.addEventListener("mousemove", this.handlerMouseMove);
    }
    handlerMouseMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };
    componentWillUnmount() {
      window.removeEventListener("mousemove", this.handlerMouseMove);
    }

    render() {
      return <WrappedCompoent {...this.state}></WrappedCompoent>;
    }
  }
  return Mouse;
}

export default withMouse;
