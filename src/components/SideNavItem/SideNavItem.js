import React from 'react';

function NavItem(props){
    return(
        <li className={"nav-item " + props.active}>
            <a className="nav-link" href="/">
                <i className={"fas fa-fw fa-" + props.icon}></i>
                <span>{props.name}</span></a>
        </li>
    )
}

export default NavItem