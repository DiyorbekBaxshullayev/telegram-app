import React from 'react';
import CarCard from './components/CarCard';

const sampleCars = [
  { id: 1, name: 'Chevrolet Malibu', price: 50, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Kia K5', price: 45, image: 'https://via.placeholder.com/150' },
];

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🚗 Rent a Car</h1>
      <div className="grid grid-cols-1 gap-4">
        {sampleCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Home;
