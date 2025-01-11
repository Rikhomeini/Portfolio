import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Card, { CardHeader, CardContent } from '../ui/Card';
import NeonText from '../ui/NeonText';
import Button from '../ui/Button';

// Import Gambar
import IoT from '../../assets/images/IoT.jpg';
import WEB from '../../assets/images/webunsplash.jpg';
import Otomation from '../../assets/images/pomprov.jpg';

// Data Proyek
const projects = [
  {
    title: 'Smart Home Automation',
    description: 'A home automation system using IoT technology to control devices remotely.',
    image: IoT,
    tags: ['IoT', 'Raspberry Pi', 'Python', 'Blynk'],
    link: 'https://github.com/yourusername/smart-home-automation'
  },
  {
    title: 'Responsive Portfolio Website',
    description: 'A modern and responsive portfolio website built with React and Tailwind CSS.',
    image: WEB,
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    link: 'https://your-portfolio.com'
  },
  {
    title: 'Energy Monitoring Dashboard',
    description: 'A dashboard to monitor real-time energy usage and optimize power consumption.',
    image: Otomation,
    tags: ['JavaScript', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yourusername/energy-monitoring-dashboard'
  }
];

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <NeonText tag="h2" className="text-4xl font-bold mb-4">
            Featured Projects
          </NeonText>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent work and creative solutions.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              variant="glass"
              isAnimated
              className="overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Header */}
              <CardHeader>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </CardHeader>

              {/* Project Content */}
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  View Project →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
