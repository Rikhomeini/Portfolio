// src/components/layout/Footer.tsx
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative z-10 glass-bg mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-bold neon-text"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.h3>
            <p className="text-gray-300">
              Building amazing digital experiences with cutting-edge technology.
            </p>
          </div>

          {/* Middle Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-neon-blue">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-neon-blue transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-neon-blue">Connect</h4>
            <div className="flex space-x-4">
              {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="text-gray-300 hover:text-neon-blue transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;