import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail,  } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/aryan-7050', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/aryan-patil-5b9331291', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/aryanpatil', label: 'Twitter' },
    { icon: FiMail, href: 'aryanpatil7050@gmail.com', label: 'Email' },
  ];

  const scrollToSection = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r 
                         from-white to-gray-400 bg-clip-text text-transparent">
              Aryan Patil
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Building digital experiences, one line of code at a time.
              Full-stack developer passionate about creating innovative
              solutions that make a difference.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Kolhapur, India</li>
              <li>
                <a href="tel:+918554015600" className="hover:text-white transition-colors">
                  +91 8554015600
                </a>
              </li>
              <li>
                <a href="mailto:aryanpatil7050@gmail.com" className="hover:text-white transition-colors">
                  aryanpatil7050@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-px bg-gray-800 mb-8"
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center items-center text-gray-400 text-sm py-4"
        >
          <p className="text-center">
            © {currentYear} Aryan Patil. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;