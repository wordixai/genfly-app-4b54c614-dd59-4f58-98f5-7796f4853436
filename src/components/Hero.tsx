import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-amber-50">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Cafe background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-amber-700/30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
              Welcome to <span className="text-amber-700">Café Aroma</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto">
              Experience the perfect blend of artisanal coffee and delicious pastries in a cozy atmosphere
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 text-lg">
                View Menu
              </Button>
              <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-800/10 px-8 py-3 text-lg">
                Book a Table
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;