import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;
class Headers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Header className="header" style={{width:'100%'}}>
                <div className="logo" />
            </Header>
        )
    }
}
export default Headers