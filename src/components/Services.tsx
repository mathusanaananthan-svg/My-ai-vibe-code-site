import React from 'react';
import { motion } from 'motion/react';
import { Code, Palette, Layout, Globe, Smartphone, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Building responsive, high-performance websites using modern frameworks like React and Next.js.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description: "Creating visually stunning brand identities, logos, and marketing materials that stand out.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and seamless user experiences for web and mobile apps.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Design",
      description: "Crafting mobile-first designs that focus on usability and aesthetic appeal across all devices.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Solutions",
      description: "Developing tailored software solutions to solve complex business problems effectively.",
      color: "bg-rose-50 text-rose-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "Helping businesses define their voice and visual language to connect with their audience.",
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-emerald-600 font-mono text-sm uppercase tracking-widest mb-4 block">My Services</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold">What I bring to <br /> the table.</h2>
          </div>
          <p className="text-gray-500 max-w-sm">
            Combining technical expertise with creative vision to deliver exceptional digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
