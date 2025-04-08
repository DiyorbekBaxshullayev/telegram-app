import React, { useState } from 'react';

const CarCard = ({ car }) => {
  const [showModal, setShowModal] = useState(false);

  const handleInfoClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow-md">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-40 object-cover rounded-xl mb-2"
        />
        <h2 className="text-lg font-bold mb-1">{car.name}</h2>
        <p className="text-gray-600 mb-3">Narxi: ${car.price} / kun</p>

        <div className="flex gap-2">
          <button
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => alert(`${car.name} bron qilindi!`)}
          >
            Bron qilish
          </button>
          <button
            className="flex-1 border border-gray-400 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition"
            onClick={handleInfoClick}
          >
            Mashina haqida
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md relative animate-fadeIn">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
            <p className="text-gray-700 mb-2">Narxi: <strong>${car.price}</strong> / kun</p>
            <p className="text-gray-600">
              Bu mashina yuqori quvvatli motor, zamonaviy dizayn va qulay interyerga ega. Sayohatlaringizni unutilmas qiladi!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CarCard;
