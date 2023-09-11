import React, {Component} from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Web App</h1>
        </header>
        <main>{/* Your application content goes here */}</main>
      </div>
    )
  }
}

export default App
