import React, { Component } from "react";

class Button extends Component {
  componentDidMount() {
    console.log("222", this.props.location);
  }
  render() {
    return <div>我是Ui 组件</div>;
  }
}

export default Button;
