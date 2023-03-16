import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Demo from './Demo'
import Hello from './Hello'

class App extends Component {
  state = {
    money: 100,
  }
  render () {
    return (
      <div>
        <h1>我是App组件</h1>
        <button onClick={this.buy}>buy something</button>
        <div>父组件的金钱：{this.state.money}</div>
        {/* 通过属性的方式，给组件提供数据 */}
        <Demo 
          name="zs" 
          money={this.state.money} 
          flag={true} 
          fn={() => {
            console.log('fn函数')
          }}
          list={[1,2,3]}
          user={{ name: 'zs', age: 18 }}
          content={<div>我是内容</div>}
        ></Demo>
        <Hello money={100}></Hello>
      </div>
    )
  }
  buy = () => {
    this.setState({
      money: this.state.money - 10,
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))