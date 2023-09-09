import React from 'react';
import car1 from '../assets/car_model1.png';
import car2 from '../assets/car_model2.png';
import car3 from '../assets/car_model3.png';
import car4 from '../assets/car_model4.png';
import car5 from '../assets/car_model5.png';
import car6 from '../assets/car_model6.png';
import { Header, Text } from './Text.js';

function PictureOfCar ({image}) {
    return (
        <img src={image} alt="Car" />
    );
}

export default function Gallery() {
    const carImages = [car1, car2, car3, car4, car5, car6];

    return (
        <section style={{ marginLeft: 30 }}>
            <Header />
            <div>
                {carImages.map((image, index) => (
                    <PictureOfCar key={index} image={image} />
                ))}
            </div>
            <Text />
        </section>
    );
}
