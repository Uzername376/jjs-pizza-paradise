
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="hero-pattern">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-pizza-dark leading-tight mb-4">
              Fresh, Delicious <span className="text-pizza-red">Pizza</span> Delivered to Your Door!
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              At JJ's Pizza, we pride ourselves on making the best pizza in town! Using only the freshest ingredients for an unforgettable taste experience.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-pizza-red hover:bg-pizza-sauce text-white px-8 py-6 rounded-full text-lg">
                Order Online
              </Button>
              <Button variant="outline" className="border-pizza-red text-pizza-red hover:bg-pizza-red hover:text-white px-8 py-6 rounded-full text-lg">
                View Menu
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-pizza-red/20 blur-xl"></div>
              <img 
                src="/lovable-uploads/de5ec946-d3cb-43a6-8c93-559c4a2e65db.png" 
                alt="Delicious pizza" 
                className="relative z-10 max-w-full rounded-full pizza-shadow animate-pulse"
                style={{animationDuration: '4s'}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
