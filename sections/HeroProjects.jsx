import React from 'react';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components/CustomTexts';
import { fadeIn, slideIn } from '../utils/motion';

const HeroProjects = () => {
  return (
    <section className="mb-24 relative bg-black-100 p-12">
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="text-center"
      >
        <TitleText title="My Projects" textStyles="text-[80px] font-bold z-10" />
        <TypingText title="Find all my Projects below" textStyles="text-[20px] mt-4" />
      </motion.div>

      
    </section>
  );
};

export default HeroProjects;
