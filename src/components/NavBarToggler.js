import React from "react";
import PropTypes from "prop-types";

const NavBarToggler = props => {
	return (
		<div>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target={`#${props.target}`}
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
		</div>
	);
};

NavBarToggler.propTypes = {
	target: PropTypes.string
};

export default NavBarToggler;
