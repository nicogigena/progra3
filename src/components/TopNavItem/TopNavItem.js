import React from 'react';

function TopNavItem(props){
    return(
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                <i className={"fas fa-" + props.icon + " fa-fw"}></i>
                {/* <!-- Counter - Messages --> */}
                <span className="badge badge-danger badge-counter">{props.value}</span>
            </a>
        </li>
    )
}

export default TopNavItem