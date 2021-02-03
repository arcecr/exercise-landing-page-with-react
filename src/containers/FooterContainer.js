import React from "react";
import PropTypes from "prop-types";

import Container from "../components/Container";

const FooterContainer = props => {
	return (
		<footer className="mt-4 py-5 bg-dark">
			<Container className="text-center">
				<span className="text-white">{props.text}</span>
			</Container>
		</footer>
	);
};

FooterContainer.propTypes = {
	text: PropTypes.string
};

export default FooterContainer;
