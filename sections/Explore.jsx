'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Button, ButtonGroup } from '@chakra-ui/react'
import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const router = useRouter();
  const [active, setActive] = useState('world-2');
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 5;
  const maxPages = Math.ceil(exploreWorlds.length / cardsPerPage);

  const currentWorlds = exploreWorlds.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );
  const aboutButtonClick = () => {
    router.push('/about'); // Navigate to the about page
  };
  const projectsButtonClick = () => {
    router.push('/projects'); // Navigate to the about page
  };

  return (
    <section className={`${styles.paddings}`} id="explore">
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Projects" textStyles="text-center" />
        <TitleText
          title={<>Get a taste of some projects I've been working on!</>}
          textStyles="text-center"
        />
        <div className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white z-10'>
        
            <Button colorScheme='purple' size='lg' variant='outline' onClick={projectsButtonClick}>
              
                View all projects
                
            </Button>
          
        </div>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {currentWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
        
      </motion.div>
    </section>
  );
};

export default Explore;
