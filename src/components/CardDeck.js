import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

const CardDeck = props => {
	return <div className="card-deck">{props.children}</div>;
};

CardDeck.propTypes = {
	children: PropTypes.arrayOf(Card)
};

export default CardDeck;
