import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Button from '../ui/Button'; 
import NeonText from '../ui/NeonText'; 

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      ref={ref}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto text-center"
        >
          {/* NeonText for introduction */}
          <motion.div variants={itemVariants}>
            <NeonText tag="h1" intensity="high" className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm Rikhomeini
            </NeonText>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A Frontend Engineer & IoT Enthusiast
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center">
            <Button variant="primary" size="lg" aria-label="View my projects">
              View Projects
            </Button>
            <Button variant="secondary" size="lg" aria-label="Contact me">
              Contact Me
            </Button>
          </motion.div>

          {/* Technology icons */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 flex justify-center items-center gap-8 flex-wrap"
          >
            {['React', 'C++', 'Node.js', 'Phyton'].map((tech) => (
              <motion.div
                key={tech}
                className="text-gray-400 hover:text-neon-blue transition-transform duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
