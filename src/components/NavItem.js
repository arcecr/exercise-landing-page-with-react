import React from "react";
import PropTypes from "prop-types";

const NavItem = props => (
	<li key className="nav-item">
		{props.children}
	</li>
);

NavItem.propTypes = {
	children: PropTypes.element
};

export default NavItem;
