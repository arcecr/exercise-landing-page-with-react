import React from "react";
import PropTypes from "prop-types";

const Jumbotron = props => {
	return <div className="jumbotron">{props.children}</div>;
};

Jumbotron.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	])
};

export default Jumbotron;
