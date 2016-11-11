import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainSidebar from '../components/mainSidebar/MainSidebar'
import HeaderBar from './../components/headerBar/HeaderBar'

const App = ({todos, actions}) => (
    <div className="app">
        <MainSidebar/>
	    <div className="main-panel">
		    <HeaderBar/>
		    <div class="main-content">
			    {this.props.child}
		    </div>
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
    actions: {}
})

// class App extends Component {
//   render() {
//     return (
      
//     );
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
