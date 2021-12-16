import React from "react";

function withMouse(WrappedComponent) {
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
      return <WrappedComponent {...this.state}{...this.props} />;
    }
  }
  // 设置displayName
  Mouse.displayName = `withMouse${getDisplayName(WrappedComponent)}`;
  return Mouse;
}
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withMouse;
