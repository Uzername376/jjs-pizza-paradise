
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-pizza-red rounded-full flex items-center justify-center">
            <span className="text-white font-bold">JJ</span>
          </div>
          <span className="text-2xl font-display font-bold text-pizza-dark">JJ's <span className="text-pizza-red">Pizza</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-pizza-red transition-colors">Home</a>
          <a href="#menu" className="font-medium hover:text-pizza-red transition-colors">Menu</a>
          <a href="#about" className="font-medium hover:text-pizza-red transition-colors">About</a>
          <a href="#contact" className="font-medium hover:text-pizza-red transition-colors">Contact</a>
          <Button className="bg-pizza-red hover:bg-pizza-sauce text-white rounded-full px-6">
            Order Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="font-medium hover:text-pizza-red transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#menu" className="font-medium hover:text-pizza-red transition-colors" onClick={toggleMenu}>Menu</a>
            <a href="#about" className="font-medium hover:text-pizza-red transition-colors" onClick={toggleMenu}>About</a>
            <a href="#contact" className="font-medium hover:text-pizza-red transition-colors" onClick={toggleMenu}>Contact</a>
            <Button className="bg-pizza-red hover:bg-pizza-sauce text-white w-full">
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
