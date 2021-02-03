import React from "react";
import PropTypes from "prop-types";

import Jumbotron from "../components/Jumbotron";

const JumbotronContainer = props => {
	return (
		<Jumbotron>
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.lead}</p>
			<a
				className="btn btn-primary btn-lg"
				href={props.buttonUrl}
				role="button">
				{props.buttonLabel}
			</a>
		</Jumbotron>
	);
};

JumbotronContainer.propTypes = {
	title: PropTypes.string,
	lead: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string
};

export default JumbotronContainer;
