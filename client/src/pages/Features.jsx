import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Features.css';
import Footer from '../components/Footer';

const Features = () => {
  return (
    <div className="features-page">
      <motion.div 
        className="features-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="features-title">Discover Our Features</h1>
        <p className="features-subtitle">Explore what makes BucketBuddies unique</p>
      </motion.div>

      <motion.div 
        className="features-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="feature-icon">🎯</div>
          <h3 className="feature-title">Smart Goal Setting</h3>
          <p className="feature-description">
            Set, track, and achieve your goals with our intelligent goal-setting system.
            Break down big dreams into manageable steps.
          </p>
        </motion.div>

        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="feature-icon">🤝</div>
          <h3 className="feature-title">Community Support</h3>
          <p className="feature-description">
            Connect with like-minded individuals, share experiences, and get inspired
            by others' success stories.
          </p>
        </motion.div>

        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="feature-icon">📊</div>
          <h3 className="feature-title">Progress Tracking</h3>
          <p className="feature-description">
            Visualize your progress with detailed analytics and beautiful charts.
            Stay motivated with real-time updates.
          </p>
        </motion.div>

        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="feature-icon">🔔</div>
          <h3 className="feature-title">Smart Reminders</h3>
          <p className="feature-description">
            Never miss a step with our intelligent reminder system. Get personalized
            notifications when you need them most.
          </p>
        </motion.div>

        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="feature-icon">🎨</div>
          <h3 className="feature-title">Customization</h3>
          <p className="feature-description">
            Personalize your experience with customizable themes, layouts, and
            goal categories.
          </p>
        </motion.div>

        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="feature-icon">📱</div>
          <h3 className="feature-title">Cross-Platform</h3>
          <p className="feature-description">
            Access your goals and progress from anywhere. Seamlessly sync across
            all your devices.
          </p>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Features;
