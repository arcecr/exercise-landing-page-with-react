import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

const Nav = props => {
	const { className } = props;

	const classes = ClassNames(className, "navbar-nav");

	return <ul className={classes}>{props.children}</ul>;
};

Nav.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	]),
	className: PropTypes.string
};

export default Nav;
