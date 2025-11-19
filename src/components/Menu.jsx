import React, { useState } from "react";
import MenuCard from "../layouts/MenuCard";
import { ShoppingCart, X, Trash2 } from "lucide-react";

const dishes = [
  {
    id: 1,
    name: "Chicken Burger",
    price: "$5.99",
    tag: "Hot",
    image: "/img/menu1.png",
    description:
      "Crispy chicken patty with lettuce, tomato, and our signature sauce.",
  },
  {
    id: 2,
    name: "Peri Peri Pizza",
    price: "$8.49",
    tag: "New",
    image: "/img/menu2.png",
    description:
      "Spicy Peri Peri sauce topped with olives, peppers, and mozzarella cheese.",
  },
  {
    id: 3,
    name: "Sushi Deluxe",
    price: "$6.25",
    tag: "",
    image: "/img/menu3.png",
    description: "Fresh sushi rolls with tuna, salmon, and avocado.",
  },
  {
    id: 4,
    name: "Paneer Poppers",
    price: "$7.80",
    tag: "Hot",
    image: "/img/menu4.png",
    description: "Crispy paneer balls served with mint chutney.",
  },
  {
    id: 5,
    name: "Club Sandwich",
    price: "$3.20",
    tag: "",
    image: "/img/menu5.png",
    description: "Triple-decker sandwich with veggies and special sauce.",
  },
  {
    id: 6,
    name: "Mocktail Mojito",
    price: "$4.75",
    tag: "New",
    image: "/img/menu6.png",
    description: "Refreshing blend of mint, lime, and soda.",
  },
  {
    id: 7,
    name: "Nacho Fiesta",
    price: "$7.80",
    tag: "Hot",
    image: "/img/menu7.png",
    description: "Crispy nachos served with guacamole and cheese dip.",
  },
  {
    id: 8,
    name: "Biryani Bowl",
    price: "$3.20",
    tag: "",
    image: "/img/menu8.png",
    description: "Flavorful rice bowl with aromatic spices and tender chicken.",
  },
];

const Menu = () => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openPopup = (dish) => setSelectedDish(dish);
  const closePopup = () => setSelectedDish(null);

  const addToCart = (dish) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === dish.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...dish, quantity: 1 }];
      }
    });
    closePopup();
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(newQuantity, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotal = () => {
    return cart
      .reduce(
        (total, item) =>
          total + parseFloat(item.price.replace("$", "")) * item.quantity,
        0
      )
      .toFixed(2);
  };

  return (
    <section
      className="bg-white dark:bg-black text-black dark:text-white py-16 px-5 lg:px-14 transition-colors duration-300 relative"
      id="food"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-orange-500 font-medium uppercase tracking-wider mb-2">
          Our Menu
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Top Picks For You</h2>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {dishes.map((dish) => (
          <MenuCard key={dish.id} {...dish} onClick={() => openPopup(dish)} />
        ))}
      </div>

      {/* Dish Popup Modal */}
      {selectedDish && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white dark:bg-[#1F1D2B] rounded-2xl p-3 lg:p-8 w-11/12 sm:w-96 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="cursor-pointer absolute top-3 right-4 text-gray-400 hover:text-orange-500 text-xl"
            >
              &times;
            </button>
            <img
              src={selectedDish.image}
              alt={selectedDish.name}
              className="w-70 h-70 mx-auto object-contain mb-8"
            />
            <h3 className="text-2xl font-semibold mb-2">{selectedDish.name}</h3>
            <p className="text-orange-500 font-bold mb-4">
              {selectedDish.price}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {selectedDish.description}
            </p>
            <button
              onClick={() => addToCart(selectedDish)}
              className="cursor-pointer w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Floating Cart Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <button
            onClick={() => setIsCartOpen(true)}
            className="cursor-pointer bg-blue-500 hover:bg-orange-600 p-4 rounded-full text-white shadow-lg transition"
          >
            <ShoppingCart size={22} />
          </button>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-[#1F1D2B] shadow-2xl transform transition-transform duration-300 z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-300 dark:border-gray-700">
          <h3 className="text-xl font-semibold">Your Cart</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500 hover:text-orange-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-5 overflow-y-auto h-[calc(100%-160px)]">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4 border-b pb-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-18 h-18 rounded-lg"
                />
                <div className="flex-1 ml-3 text-left">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-orange-500 font-semibold">{item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-orange-500 hover:text-white transition"
                    >
                      −
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-orange-500 hover:text-white transition"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 transition ml-2"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 dark:border-gray-700 p-4">
          <div className="flex justify-between ">
            <span className="font-medium">Total:</span>
            <span className="font-bold text-orange-500">${getTotal()}</span>
          </div>
          <button
            disabled={cart.length === 0}
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition disabled:bg-gray-400"
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
