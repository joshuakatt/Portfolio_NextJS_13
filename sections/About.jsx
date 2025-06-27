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
      I'm <span className="font-extrabold text-white">Joshua</span>, a <span className="font-extrabold text-white">computer science</span> senior who likes <span className="font-extrabold text-white">solving problems!</span><br />
      I'm currently founder & president of the <a href="https://www.munquantsoc.club/about" className="font-extrabold text-white">MUN Quant Society</a>.<br />
      Check out my <span className="font-extrabold text-white">projects</span> and take a look around!<br /><br />
        <a href="https://github.com/joshuakatt" target="_blank" rel="noopener noreferrer" className="text-white">Git</a> |
        <a href="https://www.linkedin.com/in/joshua-kattapuram/" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a> |
        <a href="mailto:joshuakattapuram10@gmail.com" className="text-white">Email</a>



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