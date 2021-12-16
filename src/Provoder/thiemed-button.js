import React from "react";
import { ThemeContext } from "./theme-context";

class ThemedButton extends React.Component {
  render() {
    const { props } = this;
    const theme = this.context; //调用context中设置的theme
    console.log(theme);
    return (
      <button
        {...props}
        style={{
          backgroundColor: theme.background,
          width: "200px",
          height: "100px",
          cursor: "pointer",
        }}
      />
    );
  }
}

//把上文创建的context与此组件关联，这样就可以在ThemeButton这个组件中通过this.context去调用设置的值了，
//这只是其中一种方式，也可以在ThemedButton这个组件内部，通过 static contextType = ThemeContext;来与此组件关联
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
