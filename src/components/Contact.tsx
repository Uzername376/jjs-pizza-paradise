
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-pizza-dark mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or special requests? We're here to help. Contact us anytime!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-pizza-dark mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    rows={4}
                    required 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-pizza-red hover:bg-pizza-sauce text-white w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white rounded-lg p-8 shadow-md h-full">
              <h3 className="text-2xl font-bold text-pizza-dark mb-6">Store Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-pizza-red mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800">Our Location</h4>
                    <p className="text-gray-600">123 Pizza Lane, Flavor Town, FT 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-pizza-red mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800">Phone Number</h4>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-pizza-red mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800">Email Address</h4>
                    <p className="text-gray-600">info@jjspizza.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-pizza-red mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800">Opening Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: 12:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-pizza-dark mb-2">Quick Delivery</h4>
                <p className="text-gray-600 mb-3">Order online and get your pizza delivered in 30 minutes or less!</p>
                <Button className="bg-pizza-red hover:bg-pizza-sauce text-white w-full">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
