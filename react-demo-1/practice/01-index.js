import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

class App extends React.Component {
  state = {
    list: [
      {
        id :1,
        name: 'Ariana Grande',
        content: 'Thank you, next'
      }, {
        id: 2,
        name: 'Taylor Swift',
        content: 'You belong with me'
      }, {
        id: 3,
        name: 'Adele',
        content: 'Chasing Pavement'
      },
    ],
    name: '',
    content: '',
  }
  render () {
    return (
      <div className="app">
        <div>
          <input 
            className="user"
            type="text"
            placeholder="please enter signer"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            />
            <br />
            <textarea
              className="content"
              cols="30"
              rows="10"
              placeholder="please enter song"
              value={this.state.content}
              onChange={this.handleChange}
              name="content"
            />
            <br />
            <button onClick={this.add}>Release Comment</button>
            <button onClick={this.clear}>Clear Comment</button>
        </div>
        {this.renderList()}
      </div>
    )
  }
  renderList() {
    if (this.state.list.length === 0) {
      return <div className="no-comment">Currently no comment</div>
    }
    return (
      <ul>
        {this.state.list.map((item) => (
          <li key={item.id}>
            <h3>Singer: {item.name}</h3>
            <p>Song: {item.content}</p>
            <button onClick={() => this.del(item.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    )
  }

  clear = () => {
    this.setState({
      list: [],
    })
  }

  del = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }

  handleChange = (e) => {
    const {name, value} = e.target 
    this.setState({
      [name]: value,
    })
  }

  add = () => {
    const {name, content, list} = this.state 
    if (!name || !content) {
      return alert('unsufficient information!')
    }
    this.setState({
      list: [{ id: Date.now(), name, content }, ...list],
      name: '',
      content: ''
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))