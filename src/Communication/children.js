import React from "react";

class Children extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "李",
      },
    };
  }
  changePeople = () => {
    // const { name, age, company } = this.props.person;
    this.setState({
      person: {
        name: "new李",
      },
    });

    // console.log(name, age, company, this.person);
  };
  handleClick = () => {
    // 子组件调用父组件的回调函数
    // this.props.getMsg(this.state.person.name);
    console.log(this.props.getMeg(this.state.person.name));
  };
  render() {
    const { name, age, company } = this.props.person;
    const { count } = this.props;
    return (
      <div>
        <h4>我是子组件</h4>
        <div>姓名子组件:{this.state.person.name}</div>
        <div>姓名:{name}</div>
        <div>年龄:{age}</div>
        <div>公司:{company}</div>
        <div>计数器：{count}</div>
        <button onClick={this.changePeople}>改变对象</button>
        <button onClick={this.handleClick}>传递给父组件值 </button>
      </div>
    );
  }
}
export default Children;
