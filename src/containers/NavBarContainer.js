import React from "react";
import PropTypes from "prop-types";

import Container from "../components/Container";
import NavBar from "../components/NavBar";
import NavBrand from "../components/NavBrand";
import Nav from "../components/Nav";
import NavItem from "../components/NavItem";
import NavLink from "../components/NavLink";
import Collapse from "../components/Collapse";
import NavBarToggler from "../components/NavBarToggler";

const NavBarContainer = props => {
	return (
		<NavBar expand="lg" fixed={`top`} dark>
			<Container fluid>
				<NavBrand>Start Bootstrap</NavBrand>
				<NavBarToggler target="myNavBar" />
				<Collapse id="myNavBar" navbar>
					<Nav className="ml-auto">
						{props.routes.map((route, index) => {
							return (
								<NavItem key={index}>
									<NavLink href={route.url}>
										{route.name}
									</NavLink>
								</NavItem>
							);
						})}
					</Nav>
				</Collapse>
			</Container>
		</NavBar>
	);
};

NavBarContainer.propTypes = {
	routes: PropTypes.array
};

export default NavBarContainer;
