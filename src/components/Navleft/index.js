import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import "./index.less";
import MenuConfig from "./../../config/menuConfig";
const { SubMenu } = Menu;

export class Navleft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTreeNode: []
    };
  }
  componentWillMount() {
    console.log("props", this.props.children);
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    });
  }
  renderMenu = data => {
    return data.map((item, index) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.key}>
            <NavLink to={item.key}>{item.title}</NavLink>
          </Menu.Item>
        );
      }
    });
  };
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <div>
          <Menu theme="dark">{this.state.menuTreeNode}</Menu>
        </div>
      </div>
    );
  }
}

export default Navleft;
