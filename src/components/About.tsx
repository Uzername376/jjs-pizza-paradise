
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-pizza-red rounded-full absolute -top-4 -left-4 opacity-10"></div>
              <img 
                src="/lovable-uploads/ff2c908e-db97-4e56-a1d4-a6040f381689.png" 
                alt="Pizza preparation" 
                className="rounded-lg relative z-10 pizza-shadow" 
              />
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white p-4 rounded-lg pizza-shadow z-20">
                <p className="text-pizza-red font-display font-bold text-xl">10+ Years</p>
                <p className="text-pizza-dark text-sm">of pizza excellence</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-pizza-dark mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6">
              JJ's Pizza has been serving the local community for over 10 years. We believe in using only the freshest ingredients to make every pizza a masterpiece. Our friendly staff is always ready to provide you with excellent service and a delicious meal.
            </p>
            <p className="text-gray-700 mb-6">
              What started as a small family business has grown into a beloved local institution. Our secret family recipes have been passed down through generations, and we continue to perfect our craft every day.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <p className="text-3xl font-bold text-pizza-red">4,000+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-pizza-red">15+</p>
                <p className="text-gray-600">Pizza Varieties</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-pizza-red">30 min</p>
                <p className="text-gray-600">Fast Delivery</p>
              </div>
            </div>
            <Button className="bg-pizza-red hover:bg-pizza-sauce text-white px-6 py-2 rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
