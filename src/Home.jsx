import React from 'react';
import CarCard from './components/CarCard';

const cars = [
  {
    id: 1,
    name: 'Chevrolet Cobalt',
    price: 35,
    image: '/images/cobalt.jpg',
    description: 'Chevrolet Cobalt - zamonaviy va qulay kompak mashina. Ajoyib yo‘l tutish va benzinni tejash xususiyatlari bilan sayohatlaringizni qulay qiladi.',
  },
  {
    id: 2,
    name: 'Chevrolet Malibu',
    price: 50,
    image: '/images/malibu.jpg',
    description: 'Chevrolet Malibu - keng va zamonaviy saloni, yuqori darajadagi xavfsizlik xususiyatlari va ajoyib quvvatga ega mashina.',
  },
  {
    id: 3,
    name: 'Kia K5',
    price: 60,
    image: '/images/k5.jpg',
    description: 'Kia K5 - sportiv dizayn, yuqori texnologiyalar va qulay interyer bilan to‘liq yangi yondashuvdagi mashina.',
  },
  {
    id: 4,
    name: 'Hyundai Gentra',
    price: 45,
    image: '/images/gentra.jpg',
    description: 'Hyundai Gentra - amaliy va ishonchli sedan, ajoyib yo‘l tutish xususiyatlari va qulay interyer bilan.',
  },
  {
    id: 5,
    name: 'Chevrolet Damas',
    price: 40,
    image: '/images/damas.jpg',
    description: 'Chevrolet Damas - kichik va qulay transport vositasi, kichik o‘lchamdagi yuklar uchun ideal tanlov.',
  },
];

const Home = () => {
  return (
    <div className="p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Home;
