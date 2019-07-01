import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import Navleft from './components/Navleft'
import './style/common.less'


export class admin extends Component {
    render () {
        return (
            <div>
                <Row className="container">
                    <Col span={3} className="nav-left">
                        <Navleft></Navleft>
                    </Col>
                    <Col span={21} className="main">
                        <Header>
                            Header
                       </Header>
                        <Row className="content">
                            {this.props.children}
                        </Row>
                        <Footer>
                            Footer
                        </Footer>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default admin
