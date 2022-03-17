import React from 'react';
import SideNavItem from "./../SideNavItem/SideNavItem"

function SideBar(){
    return(
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>
			<hr className="sidebar-divider my-0" />
            <SideNavItem
                icon="tachometer-alt" name="Dashboard" active="active" />
			<hr className="sidebar-divider" />
			<div className="sidebar-heading">Actions</div>
            <SideNavItem 
                icon="folder" name="Pages" active="" />
            <SideNavItem 
                icon="chart-area" name="Charts" active="" />
            <SideNavItem 
                icon="table" name="Tables" active="" />
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
    )
}

export default SideBar