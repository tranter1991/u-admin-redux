import React, { Component, PropTypes} from 'react';
import classnames from 'classnames';

export default class TodoTextInput extends Component{
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        placehoder: PropTypes.string,
        editing: PropTypes.bool,
        newTodo: PropTypes.bool
    }

    state = {
        text: this.props.text || ''
    }

    handleSubmit = e => {
        const text = e.target.value.trim();
        if(e.which === 13){
            this.props.onSave(text);
            if(this.props.newTodo){
                this.setState({text: ''});
            }
        }
    }

    handleChange = e => {
        this.setState({text: e.target.value});
    }

    handelBlur = e => {
        if(!this.props.newTodo){
            this.props.onSave(e.target.value);
        }
    }

    render(){
        return (
            <input className={
                    classnames({
                        edit: this.props.editing,
                        'new-todo': this.props.newTodo
                    })}
                type="text"
                placeholder={this.props.placehoder}
                autoFocus="true"
                value={this.state.text}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit} />
        );
    }
}