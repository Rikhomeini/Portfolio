import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Profile from '../../assets/images/pomprov.jpg'

const experiences = [
  {
    year: '2025',
    title: 'Internship - Quality Control Division',
    company: 'PT Intidaya Dinamika Sejati',
    description: 'Ensuring quality assurance and analyzing processes to improve product standards.'
  },
  {
    year: '2024',
    title: 'Web Developer Student',
    company: 'University of Applied Electronics',
    description: 'Developed personal projects and enhanced web development skills.'
  },
  {
    year: '2023',
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    description: 'Created responsive websites for local clients and improved UI/UX knowledge.'
  }
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker via-dark to-darker opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">About Me</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I am a passionate developer with a vision to excel in web development, software engineering, and IoT. Currently focusing on creating impactful projects and learning every day.
          </p>
          <p className="text-lg text-gray-400 italic mt-6">
            "Coding is not just a skill, but a way to shape the future."
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 mx-auto lg:mx-0 lg:w-1/3"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-neon-blue shadow-neon-blue mx-auto">
              <img
                src={Profile}
                alt="Your Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto lg:flex-1">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 pb-12 border-l-2 border-neon-blue last:pb-0"
              >
                {/* Year Bubble */}
                <div className="absolute left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-darker border-2 border-neon-blue 
                                flex items-center justify-center shadow-neon-blue">
                    <span className="text-neon-blue font-bold">{exp.year}</span>
                  </div>
                </div>

                <div className="ml-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-neon-blue mb-2">{exp.company}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {["Web Development", "MicroPython", "Quality Analysis"].map((category) => (
            <div
              key={category}
              className="p-6 rounded-lg glass-bg border border-neon-blue/20 hover:border-neon-blue/50 
                         transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-neon-blue mb-4">{category}</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="relative h-2 bg-darker rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-neon-blue"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${85 - (i * 15)}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + (i * 0.2) }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
