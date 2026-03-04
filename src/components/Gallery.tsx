import React from 'react';
import { motion } from 'motion/react';

const Gallery = () => {
  const images = [
    { src: "https://picsum.photos/seed/art1/600/800", span: "row-span-2" },
    { src: "https://picsum.photos/seed/art2/800/600", span: "col-span-2" },
    { src: "https://picsum.photos/seed/art3/600/600", span: "" },
    { src: "https://picsum.photos/seed/art4/600/600", span: "" },
    { src: "https://picsum.photos/seed/art5/800/600", span: "col-span-2" },
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-emerald-600 font-mono text-sm uppercase tracking-widest mb-4 block">Visual Exploration</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold">Creative Gallery.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.span}`}
            >
              <img
                src={img.src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
