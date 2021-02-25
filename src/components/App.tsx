import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions/index';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;   // this will be specified later
}

class App extends React.Component<AppProps> {
  
  render() {
  return (
    <div className="App">
      
    </div>
  );
  }
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[]} => {
  return { todos };
};

export default connect(mapStateToProps, { fetchTodos })(App);
