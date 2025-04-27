import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Explore.css';
import Footer from '../components/Footer';

const categories = [
  {
    title: "Adventure & Travel",
    items: [
      "Swim with sharks (or dolphins) in the wild",
      "Hike a famous trail",
      "See the Northern Lights in Iceland or Norway"
    ]
  },
  {
    title: "Personal Growth & Challenges",
    items: [
      "Learn a new language fluently",
      "Run a marathon",
      "Do a digital detox for a week"
    ]
  },
  {
    title: "Experiences & Fun",
    items: [
      "Drive a Supercar on racetrack",
      "Go for a Bungee or Cliff Jumping",
      "Do a Surf Boarding"
    ]
  },
  {
    title: "Health & Fitness",
    items: [
      "Complete a 30-day fitness challenge",
      "Master a martial art skill",
      "Meditate daily for 10 minutes"
    ]
  },
  {
    title: "Creativity & Arts",
    items: [
      "Make pottery on a wheel",
      "Learn calligraphy or hand-lettering",
      "Take a photography walk"
    ]
  }
];

const Explore = () => {
  return (
    <div className="explore-page">
      <div className="explore-header">
        <p className="explore-quote">
          "Discover endless adventures 🌟 Create exciting bucket lists from travel dreams to skill-seeking challenges—the possibilities are endless!"
        </p>
      </div>

      <div className="explore-content">
        {categories.map((category, index) => (
          <motion.section 
            key={index}
            className="category-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2>{category.title}</h2>
            <div className="category-grid">
              <div className="category-images">
                <div className="image-placeholder"></div>
                <div className="image-placeholder"></div>
                <div className="image-placeholder"></div>
              </div>
              <ul className="category-items">
                {category.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="item-icon">⬜</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Link to="#" className="see-more">
                See More <span>→</span>
              </Link>
            </div>
          </motion.section>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Explore;
