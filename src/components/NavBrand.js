import React from "react";
import PropTypes from "prop-types";

const NavBrand = props => {
	return (
		<a className="navbar-brand" href={props.href}>
			{props.children}
		</a>
	);
};

NavBrand.defaultProps = {
	href: "#"
};

NavBrand.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	href: PropTypes.string
};

export default NavBrand;
