import React, { Component } from 'react'
import classnames from 'classnames'

export default class TodoItem extends Component {
  state = {
    // 当前双击的id
    currentId: '',
    currentName: '',
  }
  inputRef = React.createRef()
  render() {
    const { item } = this.props
    return (
      <div>
        <li 
          className={classnames({
            completed: item.done,
            editing: item.id === this.state.currentId
          })} 
          key={item.id}
        >
          <div className="view">
            <input 
              className="toggle" 
              type="checkbox" 
              checked={item.done} 
              onChange={() => this.updateDone(item.id)}
            />
            <label onDoubleClick={() => this.showEdit(item)}>{item.name}</label>
            <button 
              className="destroy" 
              onClick={() => this.delTodo(item.id)}
            ></button>
          </div>
          <input className="edit" value={this.state.currentName}
            onChange={(e) => this.setState({currentName: e.target.value})} 
            onKeyUp={this.handleKeyUp}
            onBlur={() => this.setState({ currentId: '' })}
            ref={this.inputRef}
          />
        </li>
      </div>
    )
  }
  // 删除任务
  delTodo = (id) => {
    // console.log(id)
    this.props.delTodoById(id)
  }
  // 修改任务状态
  updateDone = (id) => {
    // console.log(id)
    this.props.updateDoneById(id)
  }
  showEdit = ({id, name}) => {
    // console.log(id)
    this.setState({
      currentId: id,
      currentName: name
    }) 
  }
  handleKeyUp = e => {
    if (e.keyCode === 27) {
      this.setState({
        currentId: '',
        currentName: '',
      })
    }
    if (e.keyCode === 13) {
      this.props.editTodo(this.state.currentId, this.state.currentName)
      this.setState({
        currentId: '',
        currentName: '',
      })
    }
  }
  componentDidUpdate() {
    // 让输入框有焦点
    this.inputRef.current.focus()
  }
}
