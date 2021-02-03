import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

const Container = props => {
	let containerClass = props.fluid ? "container-fluid" : "container";
	const classes = ClassNames(props.className, containerClass);

	return <div className={classes}>{props.children}</div>;
};

Container.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	]),
	fluid: PropTypes.bool,
	className: PropTypes.string
};

export default Container;
