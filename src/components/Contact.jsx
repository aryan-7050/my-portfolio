import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: FiMapPin, text: 'Kolhapur, India', link: null },
    { icon: FiPhone, text: '+91 8554015600', link: 'tel:+918554015600' },
    { icon: FiMail, text: 'aryanpatil7050@gmail.com', link: 'mailto:aryanpatil7050@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white 
                         mb-4">
              Let's talk about your project
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm always interested in hearing about new opportunities 
              and exciting projects. Whether you have a question or just 
              want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      className="flex items-center space-x-3 text-gray-700 
                               dark:text-gray-300 hover:text-gray-900 
                               dark:hover:text-white transition-colors group"
                    >
                      <item.icon size={20} className="text-gray-500 
                                group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3 text-gray-700 
                                  dark:text-gray-300">
                      <item.icon size={20} className="text-gray-500" />
                      <span>{item.text}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 
                       border border-green-200 dark:border-green-800"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 dark:text-green-400 font-medium">
                  Available for freelance work
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium 
                                            text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                         dark:border-gray-600 bg-white dark:bg-gray-800 
                         text-gray-900 dark:text-white focus:ring-2 
                         focus:ring-gray-900 dark:focus:ring-white 
                         focus:border-transparent outline-none transition-all"
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium 
                                            text-gray-700 dark:text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                         dark:border-gray-600 bg-white dark:bg-gray-800 
                         text-gray-900 dark:text-white focus:ring-2 
                         focus:ring-gray-900 dark:focus:ring-white 
                         focus:border-transparent outline-none transition-all"
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium 
                                               text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                         dark:border-gray-600 bg-white dark:bg-gray-800 
                         text-gray-900 dark:text-white focus:ring-2 
                         focus:ring-gray-900 dark:focus:ring-white 
                         focus:border-transparent outline-none transition-all"
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium 
                                               text-gray-700 dark:text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                         dark:border-gray-600 bg-white dark:bg-gray-800 
                         text-gray-900 dark:text-white focus:ring-2 
                         focus:ring-gray-900 dark:focus:ring-white 
                         focus:border-transparent outline-none transition-all 
                         resize-none"
                placeholder=""
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`btn-primary w-full flex items-center justify-center 
                       space-x-2 ${(isSubmitting || isSubmitted) ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white 
                                border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : isSubmitted ? (
                <>
                  <FiCheckCircle size={20} />
                  <span>Sent Successfully!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;