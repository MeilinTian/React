import React, {Component} from 'react'
import TodoItem from './TodoItem'

export default class TodoMain extends Component {
  render() {
    const { list, type } = this.props
    let showList = []
    if (type === 'active') {
      showList = list.filter((item) => !item.done)
    } else if (type === 'completed') {
      showList = list.filter((item) => item.done)
    } else {
      showList = list
    }
    // console.log(this.props)
    return (
      <section className="main">
        <input 
          id="toggle-all" 
          className="toggle-all" 
          type="checkbox" 
          checked={list.every((item) => item.done)}
          onChange={this.handleChange}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {showList.map((item) => (
            <TodoItem 
              key={item.id} 
              item={item}
              {...this.props}
            ></TodoItem>
          ))} 
        </ul>
      </section>
    )
  }
  handleChange = e => {
    this.props.checkAll(e.target.checked)
  }
}