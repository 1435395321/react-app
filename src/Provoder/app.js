// app.tsx 去动态切换context
import { ThemeContext, themes } from "./theme-context";
import ThemedButton from "./thiemed-button";
import React from "react";
function Page(props) {
  return props.children;
}
function Section(props) {
  return props.children;
}

// 一个使用 ThemedButton 的中间组件
function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
  }

  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值, 外部组件并不会发生变化，由此可见provider的作用了；
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    );
  }
}

//将此APP组件渲染到页面上
export default App;
