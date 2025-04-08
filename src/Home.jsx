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
    description: 'Chevrolet Malibu - keng va zamonaviy saloni, yuqori darajadagi xavfsizlik xususiyatlari va ajoyib quvvatga ega mashina.',
  },
  {
    id: 2,
    name: 'Kia K5',
    price: 45,
    image: k5Img,
    description: 'Kia K5 - sportiv dizayn, yuqori texnologiyalar va qulay interyer bilan to‘liq yangi yondashuvdagi mashina.',
  },
  {
    id: 3,
    name: 'Gentra',
    price: 35,
    image: gentraImg,
    description: 'Hyundai Gentra - amaliy va ishonchli sedan, ajoyib yo‘l tutish xususiyatlari va qulay interyer bilan.',
  },
  {
    id: 4,
    name: 'Damas',
    price: 25,
    image: damasImg,
    description: 'Chevrolet Damas - kichik va qulay transport vositasi, kichik o‘lchamdagi yuklar uchun ideal tanlov.',
  },
  {
    id: 5,
    name: 'Cobalt',
    price: 30,
    image: cobaltImg,
    description: 'Chevrolet Cobalt - zamonaviy va qulay kompak mashina. Ajoyib yo‘l tutish va benzinni tejash xususiyatlari bilan sayohatlaringizni qulay qiladi.',
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
