import React, { Component, PropTypes } from 'react'
import * as TodoFilters from '../constants/TodoFilters'

const TODO_FILTERS = {
    [TodoFilters.SHOW_ALL]: () => true,
    [TodoFilters.SHOW_ACTIVE]: todo => !todo.completed,
    [TodoFilters.SHOW_COMPLETED]: todo => todo.completed
}

export default class Footer extends Component{
    static propTypes = {
        completedCount: PropTypes.number.isRequired,
        activeCount: PropTypes.number.isRequired,
        filter: PropTypes.string.isRequired,
        onClearCompleted: PropTypes.func.isRequired,
        onShow: PropTypes.func.isRequired
    }

    renderTodoCount(){

        const { activeCount } = this.props
        
        const itemWord = activeCount === 1 ? 'item' : 'items'
        return (
            <span>
                <strong>{activeCount || 'No'}</strong>&nbsp;
                {itemWord} left
            </span>
        )
    }

    renderFilterLike(filter){
        const title = TODO_FILTERS[filter]
        const {filter : selectedFilter, onShow } = this.props
        return (
            <a 
                href="javascript:;"
                onClick={() => onShow(filter)}
                >{filter}</a>
        )
    }

    renderClearButton(){
        const { completedCount, onClearCompleted } = this.props
        if(completedCount > 0){
            return (
                <button onClick={onClearCompleted}>
                    clear
                </button>
            )    
        }
    }

    render(){
        return (
            <div>
                <div>{this.renderTodoCount()}</div>
                <ul>
                    {
                        Object.keys(TODO_FILTERS).map((value) => 
                            <li key={value}>
                                {this.renderFilterLike(value)}
                            </li>
                        )
                    }
                </ul>
                {this.renderClearButton()}
            </div>
        )
    }
}