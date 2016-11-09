import React, { Component, PropTypes } from 'react'

export default class Brand extends Component{
    static PropTypes = {

    }

    render(){
        return (
            <div className="brand">
                <a href="javascript:;" className="toggle-apps hidden-xs">
                    <i class="icon-grid"></i>
                </a>
                <div className="toggle-offscreen">
                    <a href="javascript:;" className="visible-xs hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>

                <a className="brand-logo">
                    <span>Reactor</span>
                </a>
                <a href="#" className="small-menu-visible brand-logo">R</a>
            </div>
        )
    }
}