import React from "react";
import Children from "./children";
import Brith from "./brith";
// const Communication = () => {
//   return <div>123</div>;
// };
// export default Communication;
const { Provider } = React.createContext();
class Communication extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: "王猛",
        age: 18,
        brith: `19970817`,
        company: "银联",
      },
      childData: "",
      count: 0,
    };
  }
  // 提供回调函数父传子
  getChildren = (data) => {
    console.log(`接受子组件传递的数据${data}`);
    this.setState({
      childData: data,
    });
  };
  // 兄弟通讯 改变计数器
  changCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { person, childData, count } = this.state;
    return (
      <div>
        <Provider value="pink">
          <h3>我是父组件</h3>
          <h3>我是子组件传递的值：{childData}</h3>
          <Brith changCount={this.changCount}></Brith>
          <Children count={count} person={person} getMeg={this.getChildren} />
        </Provider>
      </div>
    );
  }
}
export default Communication;
