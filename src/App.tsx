import React from 'react';

interface AppProps {
  color: string
}

class App extends React.Component<AppProps> {
  render() {
  return (
    <div className="App">
      <div>{this.props.color}</div>
    </div>
  );
  }
}

export default App;
