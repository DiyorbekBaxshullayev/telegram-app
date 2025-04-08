import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-cover rounded-xl mb-2"
      />
      <h2 className="text-lg font-bold mb-1">{car.name}</h2>
      <p className="text-gray-600 mb-3">Narxi: ${car.price} / kun</p>

      <div className="flex gap-2">
        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Bron qilish
        </button>
        <button className="flex-1 border border-gray-400 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition">
          Mashina haqida
        </button>
      </div>
    </div>
  );
};

export default CarCard;
