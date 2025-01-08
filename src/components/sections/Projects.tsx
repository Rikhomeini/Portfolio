import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Card, { CardHeader, CardContent } from '../ui/Card'; // Import komponen Card
import NeonText from '../ui/NeonText'; // Import komponen NeonText
import Button from '../ui/Button'; // Import komponen Button

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with React and Node.js',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management platform',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    link: '#'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics',
    image: '/api/placeholder/600/400',
    tags: ['React', 'D3.js', 'Firebase'],
    link: '#'
  }
];

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              variant="glass"
              isAnimated
              className="overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 
                           group-hover:scale-110"
                />
              </div>

              <CardHeader>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </CardHeader>

              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-neon-blue/10 text-neon-blue 
                               border border-neon-blue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm">
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