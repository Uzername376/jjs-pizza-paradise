
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MenuPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="bg-pizza-crust py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-pizza-dark mb-4">Our Menu</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our mouthwatering selection of handcrafted pizzas made with the freshest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/f52ec6ff-8245-44d5-a07d-d1c0b92bb263.png" 
                  alt="Meat Lovers Pizza" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-pizza-dark">Meat Lovers</h3>
                  <span className="text-pizza-red font-bold text-xl">$14.99</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Loaded with savory ground beef, pepperoni, and bacon for the ultimate meat experience. A carnivore's dream!
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-pizza-red text-white text-sm font-bold px-3 py-1 rounded-full">Popular</span>
                  <button className="bg-pizza-dark hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-full transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/c94bfa23-d32d-444e-8f7b-5bd15f5bd88d.png" 
                  alt="Mushroom Truffle Pizza" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-pizza-dark">Mushroom Delight</h3>
                  <span className="text-pizza-red font-bold text-xl">$13.99</span>
                </div>
                <p className="text-gray-600 mb-4">
                  A vegetarian favorite with premium mushrooms, truffle oil, and jalapeños for a perfect balance of flavors.
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">Vegetarian</span>
                  <button className="bg-pizza-dark hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-full transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/daebc561-ad08-4119-9cf5-574d91a70849.png" 
                  alt="Classic Pepperoni Pizza" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-pizza-dark">Classic Pepperoni</h3>
                  <span className="text-pizza-red font-bold text-xl">$12.99</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Our most popular pizza! Loaded with zesty pepperoni slices on a bed of melted mozzarella and our special sauce.
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-pizza-red text-white text-sm font-bold px-3 py-1 rounded-full">Best Seller</span>
                  <button className="bg-pizza-dark hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-full transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/7bcfc62a-f265-4922-baee-4b5381b27aab.png" 
                  alt="Cheese Pizza" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-pizza-dark">Cheese Lovers</h3>
                  <span className="text-pizza-red font-bold text-xl">$11.99</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Simple yet perfect - our cheese pizza features a blend of premium mozzarella and parmesan on our signature crust.
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">Vegetarian</span>
                  <button className="bg-pizza-dark hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-full transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-pizza-dark mb-6 text-center">Build Your Own Pizza</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-xl font-bold text-pizza-dark mb-4">1. Choose your size</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Small (10")</span>
                    <span className="font-semibold">$8.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Medium (12")</span>
                    <span className="font-semibold">$10.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Large (14")</span>
                    <span className="font-semibold">$12.99</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Extra Large (16")</span>
                    <span className="font-semibold">$14.99</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-xl font-bold text-pizza-dark mb-4">2. Choose your toppings</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Pepperoni</span>
                    <span className="font-semibold">$1.50</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mushrooms</span>
                    <span className="font-semibold">$1.00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bell Peppers</span>
                    <span className="font-semibold">$1.00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Olives</span>
                    <span className="font-semibold">$1.00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Extra Cheese</span>
                    <span className="font-semibold">$1.50</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-xl font-bold text-pizza-dark mb-4">3. Choose your crust</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Thin Crust</span>
                    <span className="font-semibold">Included</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Regular Crust</span>
                    <span className="font-semibold">Included</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Thick Crust</span>
                    <span className="font-semibold">+$1.00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cheese-Stuffed Crust</span>
                    <span className="font-semibold">+$2.50</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-pizza-red hover:bg-pizza-sauce text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
                Create Your Pizza
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MenuPage;
