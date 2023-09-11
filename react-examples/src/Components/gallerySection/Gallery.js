import React from 'react';
import car1 from '../../assets/car_model1.png';
import car2 from '../../assets/car_model2.png';
import car3 from '../../assets/car_model3.png';
import car4 from '../../assets/car_model4.png';
import car5 from '../../assets/car_model5.png';
import car6 from '../../assets/car_model6.png';
import { PictureOfCar } from './carElement/PictureOfCar.js';
import { Name } from './carElement/Name.js';

export default function Gallery() {
    const carImages = [car1, car2, car3, car4, car5, car6];
    const carModels = ['A', 'B', 'C', 'D', 'E', 'F'];

    return (
        <section style={{ marginLeft: 30 }}>
            <div className='car-container'>
            {carImages.map((image, index) => (
                    <div key={index}>
                        <PictureOfCar image={image} />
                        <Name model={carModels[index]} />
                    </div>
                ))}
            </div>
        </section>
    );
}
