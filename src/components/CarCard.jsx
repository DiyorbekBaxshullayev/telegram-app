import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-cover rounded-xl mb-2"
      />
      <h2 className="text-lg font-bold">{car.name}</h2>
      <p className="text-gray-600">Narxi: ${car.price} / kun</p>
    </div>
  );
};

export default CarCard;
