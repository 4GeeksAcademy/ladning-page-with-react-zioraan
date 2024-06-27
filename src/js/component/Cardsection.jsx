import React from "react";
import Card from './Card';

const CardSection = () => {
    const cards = [
        {
            title: 'Card Title 1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imgSrc: 'https://via.placeholder.com/150'
        },
        {
            title: 'Card Title 2',
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            imgSrc: 'https://via.placeholder.com/150'
        },
        {
            title: 'Card Title 3',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            imgSrc: 'https://via.placeholder.com/150'
        },
        {
            title: 'Card Title 4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus. Fermentum iaculis eu non diam phasellus vestibulum lorem sed.',
            imgSrc: 'https://via.placeholder.com/150'
        }
    ];

    return (
            <div className="container row-md d-md-flex justify-content-center w-100 align-items-stretch">
                {cards.map((card, index) => (
                    <div className="col-md-3 mx-1 mb-4 d-flex" key={index}>
                        <Card title={card.title} text={card.text} imgSrc={card.imgSrc} />
                    </div>
                ))}
            </div>
    );
};

export default CardSection;