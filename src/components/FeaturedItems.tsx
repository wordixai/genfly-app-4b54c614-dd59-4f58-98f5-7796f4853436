import { motion } from "framer-motion";

const featuredItems = [
  {
    id: 1,
    name: "Signature Latte",
    description: "Our house specialty with vanilla and caramel notes",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Artisan Croissant",
    description: "Buttery, flaky croissant baked fresh daily",
    price: "$3.75",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Avocado Toast",
    description: "Sourdough bread with fresh avocado and microgreens",
    price: "$8.95",
    image: "https://images.unsplash.com/photo-1603046891744-76e6300f82ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const FeaturedItems = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-800 mb-2">Featured Items</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items, crafted with care using only the finest ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                  <span className="text-amber-800 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;