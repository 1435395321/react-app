import React from "react";
import "./index.css";
class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 3,
      data: [
        { id: 1, name: "jack", context: "沙发" },
        { id: 2, name: "jack", context: "沙发" },
        { id: 3, name: "jack", context: "沙发" },
      ],
      form: {
        name: "",
        context: "",
      },
    };
  }
  handlerValue = (e) => {
    const { name } = e.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: e.target.value,
      },
    });
  };
  submit = () => {
    this.setState({
      data: [
        ...this.state.data,
        ...[
          {
            id: this.state.id + 1,
            name: this.state.form.name,
            context: this.state.form.context,
          },
        ],
      ],
      form: {
        // ...this.state.form,
        name: "",
        context: "",
      },
    });
  };

  renderList = () => {
    const { data } = this.state;
    if (data.length === 0) {
      return <div>暂无评论内容</div>;
    }
    return data.map((item) => (
      <div key={item.id}>
        <h3>评论人: {item.name}</h3>
        <div>内容: {item.context}</div>
      </div>
    ));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="请输入姓名"
          name="name"
          value={this.state.form.name}
          onChange={this.handlerValue}
        ></input>
        <textarea
          placeholder="请输入内容"
          name="context"
          value={this.state.form.context}
          onChange={this.handlerValue}
        ></textarea>
        <button onClick={this.submit}>发表评论</button>
        <hr />
        {this.renderList()}
      </div>
    );
  }
}
export default Comments;
