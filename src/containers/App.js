import React from "react";

import routes from "../routes";
import cardsData from "../api/mockCardsDataApi";

import Container from "../components/Container";
import JumbotronContainer from "./JumbotronContainer";
import NavBarContainer from "./NavBarContainer";
import Cards from "./Cards";
import FooterContainer from "./FooterContainer";

const App = () => {
	return (
		<>
			<NavBarContainer routes={routes} />
			<Container fluid>
				<JumbotronContainer
					title="A Warm Welcome!"
					lead="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, making it look like readable English."
					buttonUrl="#"
					buttonLabel="Call to action!"
				/>
				<Cards items={cardsData} />
			</Container>
			<FooterContainer text="Copyright &#169; Your Website 2021" />
		</>
	);
};

export default App;
