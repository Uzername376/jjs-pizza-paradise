
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
};

const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic cheese pizza with tomato sauce, mozzarella, and fresh basil.",
    price: 8.99,
    image: "/lovable-uploads/de5ec946-d3cb-43a6-8c93-559c4a2e65db.png",
    popular: true,
    vegetarian: true
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "A classic favorite topped with cheese and pepperoni slices.",
    price: 9.99,
    image: "/lovable-uploads/a0502d1e-e46f-496a-bda7-ab08c0278da1.png",
    popular: true
  },
  {
    id: 3,
    name: "Supreme",
    description: "Loaded with pepperoni, sausage, bell peppers, onions, and olives.",
    price: 12.99,
    image: "/lovable-uploads/ff2c908e-db97-4e56-a1d4-a6040f381689.png",
    spicy: true
  },
  {
    id: 4,
    name: "Veggie Delight",
    description: "Topped with bell peppers, mushrooms, onions, olives, and tomatoes.",
    price: 11.99,
    image: "/lovable-uploads/885f6a5d-8e36-447f-8030-20efc8e0e0a4.png",
    vegetarian: true
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-pizza-dark mb-4">Our Delicious Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our variety of handcrafted pizzas made with love and the freshest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pizzas.map((pizza) => (
            <Card key={pizza.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none pizza-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={pizza.image} 
                  alt={pizza.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-pizza-dark">{pizza.name}</h3>
                  <span className="text-pizza-red font-bold">${pizza.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{pizza.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pizza.popular && <Badge className="bg-pizza-red">Popular</Badge>}
                  {pizza.vegetarian && <Badge className="bg-green-500">Vegetarian</Badge>}
                  {pizza.spicy && <Badge className="bg-orange-500">Spicy</Badge>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
