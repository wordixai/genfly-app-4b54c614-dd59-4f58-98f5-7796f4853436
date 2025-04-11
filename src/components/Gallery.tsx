import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Coffee art"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Coffee cup on table"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Pastries display"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Cafe interior"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-800 mb-2">Gallery</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into our cozy atmosphere and delicious offerings
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-amber-800 font-medium">
            Follow us on Instagram <span className="font-bold">@cafearoma</span> for more delicious moments
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;