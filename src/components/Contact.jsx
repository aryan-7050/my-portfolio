import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  FiSend, FiMapPin, FiPhone, FiMail, FiCheckCircle, 
  FiGithub, FiLinkedin, FiTwitter, FiInstagram, 
  FiUser, FiMessageCircle, FiClock, FiStar
} from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const contactInfo = [
    { icon: FiMapPin, text: 'Kolhapur, India', detail: 'Maharashtra, India', link: null, color: '#10B981' },
    { icon: FiPhone, text: '+91 8554015600', detail: 'Call me anytime', link: 'tel:+918554015600', color: '#3B82F6' },
    { icon: FiMail, text: 'aryanpatil7050@gmail.com', detail: 'Email me anytime', link: 'mailto:aryanpatil7050@gmail.com', color: '#EF4444' },
    { icon: FiClock, text: 'Available for work', detail: 'Remote | Full-time | Freelance', link: null, color: '#F59E0B' },
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/aryan-7050', label: 'GitHub', color: '#333', bg: '#1a1a1a' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/aryan-patil-5b9331291', label: 'LinkedIn', color: '#0077b5', bg: '#0a2a3a' },
    { icon: FiTwitter, href: 'https://twitter.com/aryanpatil', label: 'Twitter', color: '#1DA1F2', bg: '#0a2a3a' },
    { icon: SiLeetcode, href: 'https://leetcode.com/aryanpatil', label: 'LeetCode', color: '#FFA116', bg: '#2a1a0a' },
    { icon: FiInstagram, href: 'https://instagram.com/aryanpatil', label: 'Instagram', color: '#E4405F', bg: '#2a0a0a' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-black"
    >
      {/* Animated Background - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -100, -200],
              x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side - Contact Info */}
          <div>
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      className="block p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${item.color}15` }}
                        >
                          <item.icon size={20} style={{ color: item.color }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">{item.text}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{item.detail}</p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${item.color}15` }}
                        >
                          <item.icon size={20} style={{ color: item.color }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm">{item.text}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{item.detail}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>


            {/* Availability Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 dark:text-green-400 text-sm font-medium">
                  Available for freelance work
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Send a Message</h3>
            
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 rounded-lg border transition-all duration-300 
                      bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                      ${errors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                    placeholder=""
                  />
                </div>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p className="text-red-500 text-xs mt-1">{errors.name}</motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 rounded-lg border transition-all duration-300 
                      bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                      ${errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                    placeholder=""
                  />
                </div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p className="text-red-500 text-xs mt-1">{errors.email}</motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <div className="relative">
                  <FiMessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-3 py-2 rounded-lg border transition-all duration-300 
                      bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                      ${errors.subject 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                    placeholder=""
                  />
                </div>
                <AnimatePresence>
                  {errors.subject && (
                    <motion.p className="text-red-500 text-xs mt-1">{errors.subject}</motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-3 py-2 rounded-lg border transition-all duration-300 
                    bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none
                    ${errors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:border-purple-500'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                  placeholder=""
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p className="text-red-500 text-xs mt-1">{errors.message}</motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300
                  bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/25
                  ${(isSubmitting || isSubmitted) ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center justify-center gap-2">
                    <FiCheckCircle size={18} />
                    <span>Sent Successfully!</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span>Send Message</span>
                    <FiSend size={16} />
                  </div>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Contact;