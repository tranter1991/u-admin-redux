import React, { Component, PropTypes } from 'react'

export default class Menu extends Component{

    render(){
        return (
            <nav role="navigation">
                <ul className="nav">
                    <li>
                        <a href="index.html">
                            <i className="icon-compass"></i>
                            <span>仪表盘</span>
                        </a>
                    </li>
                    <li>
                        <a href="http://customizer.nyasha.me/#reactor" target="_blank">
                            <i className="icon-equalizer"></i>
                            <span>自定义</span>
                        </a>
                    </li>
                    <li className="menu-accordion">
                        <a href="javascript:;">
                            <span className="badge pull-right">4</span>
                            <i className="icon-drop"></i>
                            <span>卡片</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a href="cards-basic.html">
                                    <span>Basic</span>
                                </a>
                            </li>
                            <li>
                                <a href="cards-portlets.html">
                                    <span>Portlets</span>
                                </a>
                            </li>
                            <li>
                                <a href="cards-draggable.html">
                                    <span>Draggable</span>
                                </a>
                            </li>
                            <li>
                                <a href="cards-widgets.html">
                                    <span>Widgets</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-accordion open">
                        <a href="javascript:;">
                            <i className="icon-cursor"></i>
                            <span>Apps</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a href="apps-calendar.html">
                                    <span>Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a href="apps-gallery.html">
                                    <span>Gallery</span>
                                </a>
                            </li>
                            <li>
                                <a href="apps-messages.html">
                                    <span>Messages</span>
                                </a>
                            </li>
                            <li>
                                <a href="apps-social.html">
                                    <span>Social</span>
                                </a>
                            </li>
                            <li>
                                <a href="apps-projects.html">
                                    <span>Projects</span>
                                </a>
                            </li>
                            <li>
                                <a href="apps-contacts.html">
                                    <span>Contacts</span>
                                </a>
                            </li>
                            <li>
                                <a href="apps-travel.html">
                                    <span>Travel</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-accordion">
                        <a href="javascript:;">
                            <i className="icon-bag"></i>
                            <span>Commerce</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a href="commerce-products.html">
                                    <span>Products</span>
                                </a>
                            </li>
                            <li>
                                <a href="commerce-cart.html">
                                    <span>Cart</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-accordion">
                        <a href="javascript:;">
                            <i className="icon-book-open"></i>
                            <span>Elements</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a href="ui-buttons.html">
                                    <span>Buttons</span>
                                </a>
                            </li>
                            <li>
                                <a href="ui-social-buttons.html">
                                    <span>Social buttons</span>
                                </a>
                            </li>
                            <li>
                                <a href="ui-general.html">
                                    <span>General</span>
                                </a>
                            </li>
                            <li>
                                <a href="ui-tabs.html">
                                    <span>Tabs</span>
                                </a>
                            </li>
                            <li>
                                <a href="ui-progressbars.html">
                                    <span>Progress bars</span>
                                </a>
                            </li>
                            <li>
                                <a href="ui-pagination.html">
                                    <span>Pagination</span>
                                </a>
                            </li>
                            <li>
                                <a href="ui-sliders.html">
                                    <span>Sliders</span>
                                </a>
                            </li>
                            <li>
                                <a href="ui-notifications.html">
                                    <span>Notifications</span>
                                </a>
                            </li>
                            <li>
                                <a href="ui-spinners.html">
                                    <span>Spinners</span>
                                </a>
                            </li>
                            <li>
                                <a href="ui-colors.html">
                                    <span>Colors</span>
                                </a>
                            </li>
                            <li>
                                <a href="ui-alerts.html">
                                    <span>Alerts</span>
                                </a>
                            </li>
                            <li className="menu-accordion">
                                <a href="javascript:;">
                                    <i className="toggle-accordion"></i>
                                    <span>Icons</span>
                                </a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="ui-icons-sli.html">
                                            <span>SLI</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui-icons-fontawesome.html">
                                            <span>Fontawesome</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="ui-icons-climacons.html">
                                            <span>Climacons</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-accordion">
                        <a href="javascript:;">
                            <i className="icon-loop"></i>
                            <span>Forms</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a href="forms-basic.html">
                                    <span>Basic</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-custom.html">
                                    <span>Custom</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-plugins.html">
                                    <span>Plugins</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-wizard.html">
                                    <span>Wizard</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-editors.html">
                                    <span>Editors</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-validation.html">
                                    <span>Validation</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-masks.html">
                                    <span>Masks</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-upload.html">
                                    <span>Upload</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-accordion">
                        <a href="javascript:;">
                            <i className="icon-share-alt"></i>
                            <span>Tables</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a href="tables-basic.html">
                                    <span>Basic</span>
                                </a>
                            </li>
                            <li>
                                <a href="tables-responsive.html">
                                    <span>Responsive</span>
                                </a>
                            </li>
                            <li>
                                <a href="tables-datatables.html">
                                    <span>Datatables</span>
                                </a>
                            </li>
                            <li>
                                <a href="tables-editable.html">
                                    <span>Editable</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-accordion">
                        <a href="javascript:;">
                            <i className="icon-pie-chart"></i>
                            <span>Charts</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a href="charts-flot.html">
                                    <span>Flot</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-easypie.html">
                                    <span>Easypie</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-chartjs.html">
                                    <span>Chartjs</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-rickshaw.html">
                                    <span>Rickshaw</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-nvd3.html">
                                    <span>nvd3</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-c3js.html">
                                    <span>C3js</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-accordion">
                        <a href="javascript:;">
                            <i className="icon-tag"></i>
                            <span>Extras</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a href="extras-invoice.html">
                                    <span>Invoice</span>
                                </a>
                            </li>
                            <li>
                                <a href="extras-timeline.html">
                                    <span>Timeline</span>
                                </a>
                            </li>
                            <li>
                                <a href="extras-timeline-stacked.html">
                                    <span>Stacked timeline</span>
                                </a>
                            </li>
                            <li>
                                <a href="extras-post.html">
                                    <span>Post</span>
                                </a>
                            </li>
                            <li>
                                <a href="extras-sortable.html">
                                    <span>Sortable</span>
                                </a>
                            </li>
                            <li>
                                <a href="extras-nestable.html">
                                    <span>Nestable</span>
                                </a>
                            </li>
                            <li>
                                <a href="extras-signin.html">
                                    <span>Signin</span>
                                </a>
                            </li>
                            <li>
                                <a href="extras-signin2.html">
                                    <span>Signin v2</span>
                                </a>
                            </li>
                            <li>
                                <a href="extras-signup.html">
                                    <span>Signup</span>
                                </a>
                            </li>
                            <li>
                                <a href="extras-signup2.html">
                                    <span>Signup v2</span>
                                </a>
                            </li>
                            <li>
                                <a href="extras-forgot.html">
                                    <span>Forgot</span>
                                </a>
                            </li>
                            <li>
                                <a href="extras-lockscreen.html">
                                    <span>Lockscreen</span>
                                </a>
                            </li>
                            <li>
                                <a href="extras-404.html">
                                    <span>404 page</span>
                                </a>
                            </li>
                            <li>
                                <a href="extras-500.html">
                                    <span>500 page</span>
                                </a>
                            </li>
                            <li>
                                <a href="blank.html">
                                    <span>Starter</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-accordion">
                        <a href="javascript:;">
                            <i className="icon-frame"></i>
                            <span>Menu Level</span>
                        </a>
                        <ul className="sub-menu">
                            <li className="menu-accordion">
                                <a href="javascript:;">
                                    <i className="toggle-accordion"></i>
                                    <span>Level</span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="menu-accordion">
                                        <a href="javascript:;">
                                            <i className="toggle-accordion"></i>
                                            <span>Level</span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="javascript:;">
                                                    <span>Level</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span>Level</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <span>Level</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <span>Level</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="http://reactor.nyasha.me/documentation" target="_blank">
                            <i className="icon-layers"></i>
                            <span>Documentation</span>
                        </a>
                    </li>
                    <li>
                        <a href="http://reactor.nyasha.me/angular" target="_blank">
                            <i className="icon-control-play"></i>
                            <span>Angular version</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}