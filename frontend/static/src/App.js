import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    }
  }

  componentDidMount() {
    fetch('/api/v1/todos/')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }))
  }
  render() {
    const todos = this.state.todos.map(todo => <p key={todo.id}>{todo.text}</p>)
    return (
      <div>
        {todos}
      </div>
    )
  }
}

export default App;
