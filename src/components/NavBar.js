import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

const NavBar = props => {
	const { expand, fixed, dark, className } = props;

	const classes = ClassNames(className, "navbar", {
		[`navbar-expand-${expand}`]: expand,
		[`fixed-${fixed}`]: fixed,
		"bg-dark": dark,
		"navbar-dark": dark
	});

	return <nav className={classes}>{props.children}</nav>;
};

NavBar.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	]),
	className: PropTypes.string,
	expand: PropTypes.string,
	fixed: PropTypes.string,
	dark: PropTypes.bool
};

export default NavBar;
