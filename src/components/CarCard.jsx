import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-center">
      <img src={car.image} alt={car.name} className="mx-auto mb-2" />
      <h2 className="text-xl font-semibold">{car.name}</h2>
      <p className="text-gray-600">Narxi: ${car.price}/kun</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Ijaraga olish
      </button>
    </div>
  );
};

export default CarCard;
