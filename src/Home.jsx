import React from 'react';
import CarCard from './components/CarCard';

const sampleCars = [
  {
    id: 1,
    name: 'Chevrolet Malibu',
    price: 50,
    image: 'https://cdn.pixabay.com/photo/2016/12/27/21/03/chevrolet-1932300_1280.jpg',
  },
  {
    id: 2,
    name: 'Kia K5',
    price: 45,
    image: 'https://cdn.pixabay.com/photo/2021/03/30/20/54/kia-6140400_1280.jpg',
  },
  {
    id: 3,
    name: 'Gentra',
    price: 35,
    image: 'https://uzautomotors.com/uploads/models/gentra_white.png',
  },
  {
    id: 4,
    name: 'Damas',
    price: 25,
    image: 'https://uzautomotors.com/uploads/models/damas_white.png',
  },
  {
    id: 5,
    name: 'Cobalt',
    price: 30,
    image: 'https://uzautomotors.com/uploads/models/cobalt_white.png',
  },
];

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🚗 Rent a Car</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sampleCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Home;
