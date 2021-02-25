import React from 'react';

interface AppProps {
  color?: string
}

class App extends React.Component<AppProps> {
  state = { counter: 0 }
  
  onIncrement = () => {
    this.setState({ counter: this.state.counter +1 })
  }

  onDecrement = () => {
    this.setState({ counter: this.state.counter -1 })
  }

  render() {
  return (
    <div className="App">
      <button onClick={this.onIncrement} >increment</button>
      <button onClick={this.onDecrement} >decrement</button>
      {this.state.counter}
    </div>
  );
  }
}

export default App;
