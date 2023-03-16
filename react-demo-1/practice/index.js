import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Child from './Child'

class App extends Component {
  state = {
    singer: ''
  }
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <div>
          Singer: <input type="text" placeholder="Please enter a signer."
          value={this.state.singer}  
          onChange={this.handleChange}
        />
        </div>
        <hr />
        <Child singer={this.state.singer} />
      </div>

    )
  }
  handleChange = (e) => {
    this.setState({
      singer: e.target.value
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))