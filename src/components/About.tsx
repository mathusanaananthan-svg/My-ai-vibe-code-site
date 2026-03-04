import React from 'react';
import { motion } from 'motion/react';
import { User, Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Tailwind CSS", "Bootstrap",
    "Adobe Photoshop", "Adobe Illustrator", "Figma", "UI/UX Design", "Brand Identity"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100">
              <img
                src="https://picsum.photos/seed/creative/1000/1000"
                alt="Working"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-600 rounded-3xl -z-10 hidden md:block" />
          </motion.div>

          <div>
            <span className="text-emerald-600 font-mono text-sm uppercase tracking-widest mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Crafting digital <br /> stories through <span className="italic">design & code</span>.</h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              I am Aananthan Mathusan, a passionate Web Developer and Graphic Designer based in Sri Lanka. With a keen eye for detail and a love for clean code, I bridge the gap between aesthetics and functionality.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Experience</h4>
                  <p className="text-sm text-gray-500">4+ Years in Industry</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Completed</h4>
                  <p className="text-sm text-gray-500">100+ Design Projects</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-full border border-gray-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
