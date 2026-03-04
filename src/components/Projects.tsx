import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://picsum.photos/seed/shop/800/600",
      link: "#",
      github: "#"
    },
    {
      title: "Brand Identity System",
      category: "Graphic Design",
      image: "https://picsum.photos/seed/brand/800/600",
      link: "#",
      github: "#"
    },
    {
      title: "Fitness Tracking App",
      category: "UI/UX Design",
      image: "https://picsum.photos/seed/fitness/800/600",
      link: "#",
      github: "#"
    },
    {
      title: "Corporate Dashboard",
      category: "Web Development",
      image: "https://picsum.photos/seed/data/800/600",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-emerald-600 font-mono text-sm uppercase tracking-widest mb-4 block">Selected Work</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold">Featured Projects.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a href={project.link} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-emerald-600 hover:text-white transition-all">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.github} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-emerald-600 hover:text-white transition-all">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                </div>
                <div className="h-px w-12 bg-black/10 mt-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
