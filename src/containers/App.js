import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import logo from '../logo.svg';
import Header from '../components/Header';
import MainSection from '../components/MainSection'
import { Button } from 'react-bootstrap';

const App = ({todos, actions}) => (
  <div className="app">
    <div className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <h2>Welcome to React<span className="glyphicon glyphicon-plus"></span></h2>
    </div>
    
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <div>
      <Button bsStyle={null} bsSize="large" block className="btn-primary cus ">Block level button</Button>
    </div>

    <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
    </div>
  </div>
);

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    todos: state.todos
})

const mapDispatchToProps = dispath =>({
    actions: bindActionCreators(TodoActions, dispath)
})

// class App extends Component {
//   render() {
//     return (
      
//     );
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
