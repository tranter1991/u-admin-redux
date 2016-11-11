import React, { Component, PropTypes } from 'react'

export default class HeaderBar extends Component{
    render(){
        return (
	        <div className="header navbar">
		        {/* 响应式,先不管 */}
		        <div className="brand visible-xs">

			        <div className="toggle-offscreen">
				        <a href="javascript:;" className="hamburger-icon visible-xs">
					        <span></span>
					        <span></span>
					        <span></span>
				        </a>
			        </div>

			        <a className="brand-logo">
				        <span>REACTOR</span>
			        </a>
		        </div>

		        {/* 前两个图标 */}
		        <ul className="nav navbar-nav hidden-xs">
			        <li>
				        <a href="javascript:;" className="small-sidebar-toggle ripple">
					        <i className="icon-arrow-left-circle"></i>


				        </a>
			        </li>
			        <li className="searchbox">
				        <a href="javascript:;">
					        <i className="search-close-icon icon-close hide"></i>
					        <i className="search-open-icon icon-magnifier"></i>
				        </a>
			        </li>
		        </ul>

		        {/* 后面图标 */}
		        <ul className="nav navbar-nav navbar-right hidden-xs">
			        <li className="">
				        <a href="javascript:;" className="ripple">
					        <span>EN</span>
					        <span className="caret"></span>
				        </a>
			        </li>
			        <li>
				        <a href="javascript:;" className="ripple">
					        <i className="icon-bell"></i>
				        </a>
			        </li>

			        <li>
				        <a href="javascript:;" className="ripple" data-toggle="dropdown" aria-expanded="false">
					        <img src="http://reactor.nyasha.me/static/images/avatar.jpg" className="header-avatar img-circle" alt="user" title="user" />
						        <span>Sean Carpenter</span>
						        <span className="caret"></span>
				        </a>
			        </li>

			        <li>
				        <a href="javascript:;" className="ripple">
					        <i className="icon-user"></i>
				        </a>
			        </li>
		        </ul>

	        </div>
        )
    }

}