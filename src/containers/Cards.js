import React from "react";
import PropTypes from "prop-types";

import CardsDeck from "../components/CardDeck";
import Card from "../components/Card";

const Cards = props => {
	return (
		<CardsDeck>
			{props.items.map((item, index) => {
				return (
					<Card key={index}>
						<img src={item.image} className="card-img-top" />
						<div className="card-body">
							<h5 className="card-title">{item.title}</h5>
							<p className="card-text">{item.description}</p>
						</div>
						<div className="card-footer">
							<a
								href={item.button.url}
								className="btn btn-primary">
								{item.button.label}
							</a>
						</div>
					</Card>
				);
			})}
		</CardsDeck>
	);
};

Cards.propTypes = {
	items: PropTypes.array
};

export default Cards;
