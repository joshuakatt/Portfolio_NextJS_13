'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { Button, ButtonGroup } from '@chakra-ui/react'

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me!" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Hi!</span><br />
      I'm <span className="font-extrabold text-white">Joshua</span>, a <span className="font-extrabold text-white">computer science junior</span>.<br />
      I love <span className="font-extrabold text-white">debugging</span> and thrive on challenges.<br />
      Check out my <span className="font-extrabold text-white">projects</span> and feel free to <span className="font-extrabold text-white">contact</span> me!



      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
    
  </section>


  
);

export default About;