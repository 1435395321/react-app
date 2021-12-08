import React from "react";
import "./index.css";
class From extends React.Component {
  constructor(props) {
    super();
    this.state = {
      text: "",
      content: "",
      city: "sh",
      isStatus: false,
    };
  }

  handlerContent = ({ target }) => {
    const { name } = target;
    if (target.type === "checkbox") {
      this.setState({
        [name]: target.checked,
      });
    } else {
      this.setState({
        [name]: target.value,
      });
    }
  };

  render() {
    return (
      <form>
        <h3>响应数据:{this.state.content}</h3>
        <textarea
          value={this.state.content}
          name="content"
          onChange={this.handlerContent}
        ></textarea>
        <input
          type="text"
          value={this.state.text}
          name="text"
          onChange={this.handlerContent}
        ></input>
        <select
          value={this.state.city}
          name="city"
          onChange={this.handlerContent}
        >
          <option value="bj">北京</option>
          <option value="sh">上海</option>
          <option value="sz">深圳</option>
        </select>
        <input
          type="checkbox"
          checked={this.state.isStatus}
          name="isStatus"
          onChange={this.handlerContent}
        ></input>
      </form>
    );
  }
}

export default From;
