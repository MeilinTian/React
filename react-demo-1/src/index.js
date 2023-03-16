import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/base.css'
import './styles/index.css'

import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

class App extends Component {
  state = {
    list: [
      { id: 1, name: 'Taste JavaScript', done: false },
      { id: 2, name: 'Buy a Unicorn', done: true },
      { id: 3, name: 'Destory the world', done: false },
    ],
    type: 'all',
  }
  render() {
    const { list, type } = this.state
    // console.log(list)
    return (
      <section className="todoapp">
        <TodoHeader
          addTodo={this.addTodo}
        ></TodoHeader>

        <TodoMain 
          list={list}
          type={type}
          delTodoById={this.delTodoById}
          updateDoneById={this.updateDoneById}
          editTodo={this.editTodo}
          checkAll={this.checkAll}
        ></TodoMain>

        <TodoFooter
          list={list}
          type={type}
          clearTodo={this.clearTodo}
          changeType={this.changeType}
        ></TodoFooter>
      </section>
    )
  }
  delTodoById = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }
  updateDoneById = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item
        }
      }),
    })
  }
  addTodo = (name) => {
    // console.log(name)
    this.setState({
      list: [
        {
          id: Date.now(),
          name,
          done: false,
        },
        ...this.state.list,
      ]
    })
  }
  editTodo = (id, name) => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return {
            ...item,
            name,
          }
        } else return item
      })
    })
  }
  clearTodo = () => {
    this.setState({
      list: this.state.list.filter((item) => !item.done)
    })
  }
  changeType = type => {
    this.setState({ type })
  }
  checkAll = check => {
    this.setState({
      list: this.state.list.map((item) => {
        return {
          ...item,
          done: check,
        }
      })
    })
  }

  componentDidMount() {
    this.setState({
      list: JSON.parse(localStorage.getItem('todos')) || [],
    })
  }
  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.list))
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
