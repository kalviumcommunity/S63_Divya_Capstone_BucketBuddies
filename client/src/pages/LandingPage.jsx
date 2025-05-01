import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/LandingPage.css';
import Footer from '../components/Footer';

const LandingPage = () => {
  const letters = "bucket   list!".split("");
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "Unlocked Local Secrets",
      description: "We curate what can't be DM'ed. Experiences that make you feel authentic and connected.",
      color: "#f5e5dc"
    },
    {
      title: "Anchored Sessions",
      description: "Individuals, Opening Dinners and Surprise Sessions along the way.",
      color: "#e2dbf3"
    },
    {
      title: "Curated People Only",
      description: "We choose over how we can bring like-minded people together.",
      color: "#e3f7e1"
    },
    {
      title: "Handpicked Stays",
      description: "Premium, Central & Instagram-worthy stays that feel like home.",
      color: "#edf6d5"
    },
    {
      title: "Stress-free",
      description: "Connect with like-minded adventurers, join exciting challenges, and celebrate endorphins stress-free with BucketBuddies.",
      color: "#fadaf1"
    },
    {
      title: "Breakaway",
      description: "Go on an incredible journey adventure with Curate People. Do things that you've always wanted to do, in style.",
      color: "#dceef7"
    },
    {
      title: "Level Up",
      description: "Discover New Perspectives in your class, life & work.",
      color: "#fde8d4"
    },
    {
      title: "Get Tribe-d",
      description: "Indulge in Experiences and Lifestyle moments that shift you.",
      color: "#e5e9ff"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterAnimation = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <motion.h1 
          className="sketch-text"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              className="sketch-letter"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <h2 className="hero-title">
          Made <span>Social</span>
        </h2>
        <p className="hero-subtitle">"THE BEST PLACE TO CREATE AND SHARE YOUR BUCKET LIST"</p>
      </section>

      {/* Main Image Section */}
      <motion.section 
        className="main-image-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="main-image-container">
          <motion.img
            src="../images/center.png"
            alt="BucketBuddies"
            className="main-image"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p 
            className="image-caption"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            "Jump into oceans, chase waterfalls, attend festivals, drive on uninterrupted roads, learn something new, dive into adventure and go on level up vacations with unique people."
          </motion.p>
        </div>
      </motion.section>

      {/* Intersection Section */}
      <section className="intersection">
        <p>Designed at the intersection of</p>
        <h3>Adventure, Explorations, Culture, Music & Play</h3>
      </section>

      {/* Features Slideshow Section */}
      <section className="features-slideshow">
        <h2>Top reasons to join<h1>BucketBuddies</h1></h2>
        <div className="slideshow-container">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentFeature}
              className="feature-slide"
              style={{ backgroundColor: features[currentFeature].color }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.2 }}
            >
              <h3>{features[currentFeature].title}</h3>
              <p>{features[currentFeature].description}</p>
            </motion.div>
          </AnimatePresence>
          <div className="slideshow-dots">
            {features.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentFeature ? 'active' : ''}`}
                onClick={() => setCurrentFeature(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Quote Section */}
      <motion.section 
        className="travel-quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="../images/travel.png"
          alt="Travel"
          className="travel-image"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="quote-overlay">
          <motion.h3
            className="quote-text"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            Travel like a rock star, with your own gang, not like a tourist...
          </motion.h3>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default LandingPage; 