import React, { Component, PropTypes } from 'react'
import  Brand from  './Brand'
import Menu from './Menu'

export default class MainSidebar extends Component{
    render(){
        return (
            <div className="sidebar-panel">
                <Brand/>
                <Menu/>
            </div>
        )
    }

}