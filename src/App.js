import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Header from './component/layout/header';
import Silders from './component/layout/silder';
import Contents from './component/layout/content';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <Layout style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
        <Header/>
        <Layout style={{flex:'1'}}>
        <Silders/>
        <Contents/>
        </Layout>
    </Layout>
    )
  }
}

export default App;
