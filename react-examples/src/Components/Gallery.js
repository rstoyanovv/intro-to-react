import React from 'react';
import car from '../assets/car_model2.png';

function Profile() {
    return (
        <img src={car} alt="Katherine Johnson" />
    );
}

function Header() {
    return (
        <h1 className="header">Gallery with Cars</h1>
    );
}

export default function Gallery() {
    return (
        <section style={{ marginLeft: 30 }}>
            <Header />
            <div>
                <Profile />
                <Profile />
                <Profile />
            </div>
        </section>
    );
}
