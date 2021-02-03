import React from "react";
import PropTypes from "prop-types";

const NavLink = props => (
	<a className="nav-link" href={props.href}>
		{props.children}
	</a>
);

NavLink.defaultProps = {
	href: "#"
};

NavLink.propTypes = {
	href: PropTypes.any,
	children: PropTypes.string
};

export default NavLink;
