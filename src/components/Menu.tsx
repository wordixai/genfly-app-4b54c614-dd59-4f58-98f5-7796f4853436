import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const categories = ["All", "Coffee", "Tea", "Pastries", "Breakfast", "Lunch"];

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    category: "Coffee",
    price: "$3.50",
    description: "Rich and intense single shot of our signature blend"
  },
  {
    id: 2,
    name: "Cappuccino",
    category: "Coffee",
    price: "$4.75",
    description: "Equal parts espresso, steamed milk, and silky foam"
  },
  {
    id: 3,
    name: "Chai Latte",
    category: "Tea",
    price: "$4.25",
    description: "Spiced black tea with steamed milk and honey"
  },
  {
    id: 4,
    name: "Almond Croissant",
    category: "Pastries",
    price: "$4.50",
    description: "Buttery croissant filled with almond cream"
  },
  {
    id: 5,
    name: "Avocado Toast",
    category: "Breakfast",
    price: "$8.95",
    description: "Sourdough toast with smashed avocado, microgreens, and chili flakes"
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-800 mb-2">Our Menu</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated menu featuring artisanal coffee, specialty teas, and freshly baked goods
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category 
                ? "bg-amber-800 hover:bg-amber-900" 
                : "border-amber-800 text-amber-800 hover:bg-amber-800/10"}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex justify-between p-4 border-b border-amber-100"
            >
              <div>
                <h3 className="text-lg font-semibold text-amber-900">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <span className="inline-block mt-1 text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="text-amber-800 font-bold">{item.price}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-amber-800 hover:bg-amber-900">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;