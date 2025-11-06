import React from "react";

const MenuCard = ({ name, price, tag, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-gray-200 dark:bg-[#1F1D2B] p-6 rounded-2xl hover:bg-orange-400 dark:hover:bg-orange-400 transition-all duration-300 cursor-pointer"
    >
      {/* Dish Image */}
      <div className="relative mb-4 flex justify-center items-center">
        <img
          src={image}
          alt={name}
          className="w-60 h-60 object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute -top-3.5 -left-4 bg-orange-500 text-white group-hover:bg-black text-xs px-2 py-1 rounded-md">
            {tag}
          </span>
        )}
      </div>

      {/* Dish Info */}
      <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
        {name}
      </h3>
      <p className="text-lg font-bold text-orange-500 group-hover:text-white transition-colors duration-300">
        {price}
      </p>
    </div>
  );
};

export default MenuCard;
