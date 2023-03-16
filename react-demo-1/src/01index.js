import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'

class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>app组件</h1>
        <ul>
          <li><a href="#/home">首页</a></li>
          <li><a href="#/my">我的音乐</a></li>
          <li><a href="#/friend">我的朋友</a></li>
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
