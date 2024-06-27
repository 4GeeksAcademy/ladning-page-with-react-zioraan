import React from "react";
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import CardSection from './Cardsection';
import Footer from './Footer';
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="container-fluid mx-0">	
			<Navbar />
            <Jumbotron />
            <CardSection />
            <Footer />
		</div>
	);
};

export default Home;
