import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainSidebar from '../components/mainSidebar/MainSidebar'
import HeaderBar from './../components/headerBar/HeaderBar'

import * as TodoActions from '../actions';


const App = ({todos, actions, children}) => (
    <div className="app">
        <MainSidebar/>
	    <div className="main-panel">
		    <HeaderBar/>
		    <div className="main-content">
                {children}
		    </div>
	    </div>
    </div>
)


App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) =>({
    todos: state.todos,
    children: props.children
})

const mapDispatchToProps = dispath =>({
    actions: bindActionCreators(TodoActions, dispath)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
