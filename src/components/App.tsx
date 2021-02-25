import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions/index';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;   // this will be specified later
}

class App extends React.Component<AppProps> {
  onButtonClick = (): void => {     // dont expect this function to return any arguments. thats why : void
    this.props.fetchTodos();
  };
  
  renderList(): JSX.Element[] {     // returning array of JSX elements.
    return this.props.todos.map((todo) => {
      return (
      <div key={todo.id}>
        {todo.title}
      </div>
      )
    })
  }

  render() {
  return (
    <div className="App">
      <button onClick={this.onButtonClick} >Fetch Todos</button>
      {this.renderList()}
    </div>
  );
  }
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[]} => {
  return { todos };
};

export default connect(mapStateToProps, { fetchTodos })(App);
