import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React/Next.js', level: 90, icon: <FaReact /> },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Three.js/WebGL', level: 75 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 82, icon: <FaNodeJs /> },
      { name: 'Express', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'REST APIs', level: 85 }
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 88 },
      { name: 'Docker', level: 70, icon: <FaDocker /> },
      { name: 'AWS', level: 65, icon: <FaAws /> },
      { name: 'CI/CD', level: 72 }
    ]
  }
];

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-darker via-dark to-darker opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">Technical Skills</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-bg rounded-lg p-6 border border-neon-blue/20 hover:border-neon-blue/50 
                         transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-neon-blue mb-2">{category.title}</h3>
              <p className="text-gray-400 mb-4">
                Skills related to {category.title.toLowerCase()} development.
              </p>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative group">
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center text-white">
                        {skill.icon && <span className="text-neon-blue mr-2">{skill.icon}</span>}
                        {skill.name}
                      </span>
                      <span className="text-neon-blue">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-darker rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-neon-blue"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + (skillIndex * 0.1) }}
                      />
                    </div>
                    <span className="absolute opacity-0 group-hover:opacity-100 bg-dark text-white text-sm rounded-lg 
                                   px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2">
                      {skill.name} is used for {category.title.toLowerCase()} development.
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
