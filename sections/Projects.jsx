import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { exploreProjects } from '../constants';
import React, { useState } from 'react';

const Projects = () => {
  const projects = exploreProjects;

  const TypingText = ({ title, textStyles }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={textStyles}>
      {title.split('').map((char, index) => (
        <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.05 }}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );

  const techStacks = new Set();
  exploreProjects.forEach(project => {
    project.sections.forEach(section => {
      if (section.title === "Tech-stack") {
        section.content.split(', ').forEach(tech => techStacks.add(tech));
      }
    });
  });

  const [filteredProjects, setFilteredProjects] = useState(exploreProjects);
  const [selectedTechs, setSelectedTechs] = useState(new Set());

  const filterProjects = (selectedTechs) => {
    const filtered = exploreProjects.filter(project =>
      Array.from(selectedTechs).some(tech =>
        project.sections.some(section =>
          section.title === "Tech-stack" && section.content.includes(tech)
        )
      )
    );
    setFilteredProjects(filtered);
  };

  const handleTechSelection = (tech) => {
    const newSelectedTechs = new Set(selectedTechs);
    if (newSelectedTechs.has(tech)) {
      newSelectedTechs.delete(tech);
    } else {
      newSelectedTechs.add(tech);
    }
    setSelectedTechs(newSelectedTechs);
    filterProjects(newSelectedTechs);
  };

  const clearFilters = () => {
    setSelectedTechs(new Set());
    setFilteredProjects(exploreProjects);
  };

  return (
    <section className={`${styles.paddings} relative z-10`} style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>
      <Accordion defaultIndex={[0]} allowMultiple className='mb-24'>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Filter by Tech Stack
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className="tech-stack-filter flex flex-wrap justify-center gap-2 mb-4">
              {Array.from(techStacks).map(tech => (
                <button
                  onClick={() => handleTechSelection(tech)}
                  className={`px-2 py-1 rounded ${selectedTechs.has(tech) ? 'bg-blue-200 hover:bg-blue-300' : 'bg-gray-200 hover:bg-gray-300'} text-black`}
                >
                  {tech}
                </button>
              ))}
            </div>
            <div className="clear-filter flex justify-center mb-4">
              <button onClick={clearFilters} className="px-2 py-1 bg-red-200 hover:bg-red-300 text-black rounded">
                Clear Filter
              </button>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        {filteredProjects.map((project, index) => (
          <motion.div key={index} id={project.id} className="flex lg:flex-row flex-col gap-8 mb-24 text-white"
            initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ duration: 1.0, type: 'spring', stiffness: 70 }}>
            <div className="flex flex-col items-center">
              <img src={project.imgUrl} alt={project.title} className="w-[540px] h-[303px] object-contain" />
              <p className="text-center mt-2">
                <a href={project.imageText} target="_blank" rel="noopener noreferrer">
                  View on Github
                </a>
              </p>
            </div>
            <div className="flex-[0.75] flex justify-center flex-col">
              <TypingText title={project.title} textStyles="text-[32px] font-bold text-center mb-6 z-10" />
              <p className="mt-[8px] font-normal sm:text-[18px] text-[16px] leading-relaxed text-center mb-8">{project.description}</p>
              <Accordion defaultIndex={[]} allowMultiple>
                {project.sections.map((section, sectionIndex) => (
                  <AccordionItem key={sectionIndex}>
                    <h2 className="mb-4">
                      <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                          {section.title}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {section.content}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
