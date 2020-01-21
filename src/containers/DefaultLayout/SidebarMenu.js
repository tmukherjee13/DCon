import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SidebarMenu extends Component {

    render() {
        let { title, url, name, icon, badge, children } = this.props.menu;

        let element;
        let child;

        if (children) {
            child = <ul className="submenu">
                {children.map((it, index) =>
                    <li key={index}>
                        <Link to={it.url}>{it.name}</Link>
                    </li>
                )
                }
            </ul>
        }


        if (title) {
            element = <li className="menu-title">{name}</li>
        } else {
            element = <li>
                <Link to={url} className="waves-effect">
                    <i className={icon}></i>
                    <span>
                        {name}

                        {children ?
                            <span className="float-right menu-arrow">
                                <i className="mdi mdi-chevron-right"></i>
                            </span> : ''
                        }




                    </span>
                </Link>
                {child}
            </li>
        }


        return <React.Fragment>
            {element}
        </React.Fragment>;
    }
}

export default SidebarMenu;