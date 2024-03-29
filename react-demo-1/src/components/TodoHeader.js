import React, {Component} from 'react'

export default class TodoHeader extends Component {
  state = {
    name: '',
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input 
          className="new-todo" 
          placeholder="What needs to be done?" 
          autoFocus 
          value={this.state.name}
          onChange={(e) => this.setState({name: e.target.value})}
          onKeyUp={this.addTodo}
        />
      </header>
    )
  }

  addTodo = (e) => {
    if (e.keyCode !== 13) return
    if(!this.state.name.trim()) {
      alert('内容不能为空！')
    }
    // 添加 todo
    this.props.addTodo(this.state.name)
    // 清空
    this.setState({
      name: '',
    })
  }
}