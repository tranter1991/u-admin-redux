import React, { Component, PropTypes } from 'react'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component{
    static PropTyps = {
        addTodo: PropTypes.func.isRequired
    }

    handleSave = text => {
        if(text.length !== 0){
            this.prop.addTodo(text)
        }
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput 
                    newTodo
                    onSave={this.props.addTodo}
                    placehoder="来吧宝贝儿" />
            </header>

        )
    }
}