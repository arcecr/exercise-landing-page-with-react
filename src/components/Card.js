import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return <div className="card">{props.children}</div>;
};

Card.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	])
};

export default Card;
