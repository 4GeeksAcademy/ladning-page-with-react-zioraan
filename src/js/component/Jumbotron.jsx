import React from "react";

const Jumbotron = () => {
	return (
        <div className="container">
			<div className="jumbotron bg-light p-4 mb-5">
				<h1 className="display-5"><strong>A Warm Welcome!</strong></h1>
				<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  				<p className="lead">	
					<a className="btn btn-primary btn-lg mb-4" href="#" role="button">Call to action!</a>
				</p>
			</div>
		</div>
    );
};

export default Jumbotron;