import React from 'react';
import CarCard from './components/CarCard';

// Rasm fayllarni import qilish
import malibuImg from './images/malibu.jpg';
import k5Img from './images/k5.jpg';
import gentraImg from './images/gentra.jpg';
import damasImg from './images/damas.jpg';
import cobaltImg from './images/cobalt.jpg';


const sampleCars = [
  {
    id: 1,
    name: 'Chevrolet Malibu',
    price: 50,
    image: malibuImg,
  },
  {
    id: 2,
    name: 'Kia K5',
    price: 45,
    image: k5Img,
  },
  {
    id: 3,
    name: 'Gentra',
    price: 35,
    image: gentraImg,
  },
  {
    id: 4,
    name: 'Damas',
    price: 25,
    image: damasImg,
  },
  {
    id: 5,
    name: 'Cobalt',
    price: 30,
    image: cobaltImg,
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
