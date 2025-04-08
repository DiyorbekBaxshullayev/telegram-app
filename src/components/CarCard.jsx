import React, { useState } from 'react';

const CarCard = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <button
          onClick={openModal}
          className="flex-1 border border-gray-400 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Mashina haqida
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h3 className="text-xl font-bold mb-3">{car.name}</h3>
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <p className="text-gray-700 mb-3">{car.description}</p>
            <p className="text-gray-600">Narxi: ${car.price} / kun</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarCard;
