import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Our cafe" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-amber-800 font-bold">Est. 2015</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-amber-800 mb-2">Our Story</h2>
            <div className="w-24 h-1 bg-amber-800 mb-6"></div>
            <p className="text-gray-700 mb-4">
              Café Aroma was born from a passion for exceptional coffee and a desire to create a welcoming space where community thrives. Founded in 2015 by coffee enthusiasts Jane and Michael, our café has grown from a small corner shop to a beloved local institution.
            </p>
            <p className="text-gray-700 mb-6">
              We source our beans directly from sustainable farms around the world, ensuring fair compensation for farmers while bringing you the finest flavors. Each cup is crafted with precision and care by our trained baristas who are as passionate about coffee as we are.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-amber-900 mb-1">Artisanal Coffee</h3>
                <p className="text-sm text-gray-600">Ethically sourced, locally roasted</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-amber-900 mb-1">Fresh Pastries</h3>
                <p className="text-sm text-gray-600">Baked in-house daily</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;