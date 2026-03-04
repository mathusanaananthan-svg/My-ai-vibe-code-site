import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, Palette, Layout } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 skew-x-12 transform translate-x-24" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
            Available for Projects
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8">
            Aananthan <br />
            <span className="text-emerald-600">Mathusan</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            A multidisciplinary creative specializing in <span className="text-black font-semibold italic">Web Development</span> and <span className="text-black font-semibold italic">Graphic Design</span>. Building digital experiences that matter.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-black text-white rounded-full font-medium flex items-center gap-2 hover:bg-emerald-600 transition-all group"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-black/10 rounded-full font-medium hover:bg-black hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative group">
            <img
              src="https://picsum.photos/seed/developer/800/1000"
              alt="Aananthan Mathusan"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <p className="text-white text-sm font-mono uppercase tracking-widest mb-2">Based in Sri Lanka</p>
              <h3 className="text-white text-2xl font-display">Creative Technologist</h3>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <Code size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Projects Done</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
