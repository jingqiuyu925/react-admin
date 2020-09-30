import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// class New extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state={
//        arr:props.newarr
//     }
//   }
//   componentDidMount(){
//       console.log(this.props)
//   }
//   render(){
//      return (
//        <div>
//            {this.state.arr.map( (item,i)=>{
//              return  <li key={i}>{item}+++++{i}</li>
//            })}
//        </div>
//      )
//   }
// }
// let arr=['盖伦','寒冰']
// class Com extends React.Component {
//    constructor(props) {
//     super(props);
//     this.state={
//       name:'嘻嘻'
//     }
//   }
//    add=()=>{
//         this.setState({
//         name:'hahh',
//         arr:arr.push('蛮子')
//         },()=>{
//         })
       

//    }
//   render() {
//     return (
//       <div>
//         <DatePicker/>
//         <New newarr={arr} />
//       <h1>11111111</h1>
//     <button onClick={this.add}>点击事件 {this.state.name}</button>
//       </div>
//     )
//   }
// }

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
