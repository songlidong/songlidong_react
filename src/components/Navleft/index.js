import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import './index.less'
import MenuConfig from './../../config/menuConfig'
const { SubMenu } = Menu;


export class Navleft extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuTreeNode: []

        }
    }
    componentWillMount () {
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode: menuTreeNode
        })
    }
    renderMenu = (data) => {

        return data.map((item, index) => {

            if (item.children) {

                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )

            } else {
                return (
                    <Menu.Item key={item.key}> {item.title} </Menu.Item>
                )

            }

        })

    }
    render () {
        return (
            <div>

                <div className='logo'>
                    <img src='/assets/logo-ant.svg' alt=''></img>
                    <h1>Imooc MS</h1>
                </div>
                <div>
                    <Menu theme='dark'>
                        {this.state.menuTreeNode}
                    </Menu>
                </div>

            </div>
        )
    }
}

export default Navleft
