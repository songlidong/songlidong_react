import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './index.less'
import { Menu, Dropdown } from 'antd';

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '张三',
            menu: []
        }

    }

    componentWillMount () {
        const menu = (
            <Menu >
                <Menu.Item key="1" onClick={this.fun}> 个人信息 </Menu.Item>
                <Menu.Item key="2">个人设置</Menu.Item>
                <hr></hr>
                <Menu.Item key="3"> 退出登录 </Menu.Item>
            </Menu>
        );
        this.setState({
            menu
        })

    }
    fun = () => {
        console.log(this)
    }

    render () {
        return (
            <div className='header-top'>
                <Row>
                    <Col span={4}>col-12</Col>
                    <Col span={20}>
                        <Dropdown overlay={this.state.menu}>
                            <span className='userInfo'>  个人信息</span>
                        </Dropdown>,
                        <span>欢迎你回来</span>
                        <span>
                            {this.state.name}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header
