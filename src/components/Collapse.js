import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

const Collapse = props => {
	const { className, navbar, ...attributes } = props;

	const classes = ClassNames(className, "collapse", {
		"navbar-collapse": navbar
	});

	return (
		<div className={classes} {...attributes}>
			{props.children}
		</div>
	);
};

Collapse.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element]),
	className: PropTypes.string,
	navbar: PropTypes.bool
};

export default Collapse;
