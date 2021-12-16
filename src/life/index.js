import React from "react";

class Life extends React.Component {
  constructor() {
    super();
    this.timer = "";
    this.state = {
      count: 0,
    };
    console.log("constructor执行了");
  }

  // 钩子函数 进行dom操作发送网络请求
  componentDidMount() {
    console.log(`componentMount执行`);
  }

  componentDidUpdate() {
    console.log(`执行父组件componenDidUpdat`);
  }

  handleCall = () => {
    this.setState({
      count: this.state.count + 1,
    });
    this.forceUpdate(); //强制更新
  };

  render() {
    const { count } = this.state;
    console.log("render执行了");
    return (
      <div>
        <h3>生命周期</h3>
        {this.state.count > 3 ? (
          <p>豆豆被打死了</p>
        ) : (
          <Counter count={count}></Counter>
        )}
        <button onClick={this.handleCall}>点击</button>
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      childCount: 0,
    };
    console.log(`子组件constructor`);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        childCount: this.state.childCount + 1,
      });
    }, 1000);
  }
  componentDidUpdate(prevProps) {
    // 如果这里想设置状态 必须比较两次的props
    if (prevProps.count !== this.props.count) {
      console.log(prevProps, this.props);
    }
    console.log(`执行子组件componenDidUpdat`);
  }
  componentWillUnmount() {
    console.log(`组件卸载阶段`);
    clearInterval(this.timer);
  }
  render() {
    console.log("子组件的render");
    return (
      <div>
        <h2>统计打豆豆次数:{this.props.count}</h2>
        <h2>定时器次数:{this.state.childCount}</h2>
      </div>
    );
  }
}

export default Life;
