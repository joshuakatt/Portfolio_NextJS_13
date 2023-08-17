import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { Button } from '@chakra-ui/react';

const Navbar = () => {
  const router = useRouter();
  const showBackButton = router.pathname === '/projects' || router.pathname === '/profdev';

  const navigateToIndex = () => {
    router.push('/');
  };

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}>
      <div className="absolute w-[50%] inset-0 gradient-01"/>
      <div className={`${styles.innerWidth} mx-auto grid grid-cols-3`}>
        <div className='relative'>
          {showBackButton && (
            <Button 
              style={{ position: 'absolute', left: '15px' }} 
              colorScheme='orange' 
              size='lg' 
              variant='outline' 
              onClick={navigateToIndex}>
              Back
            </Button>
          )}
        </div>
        <div onClick={navigateToIndex} className='text-center'>
          <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>JOSHUA KATTAPURAM</h2>
        </div>
        <div className='w-[24px] h-[24px] object-contain'></div> // Placeholder div
      </div>
    </motion.nav>
  );
};

export default Navbar;
