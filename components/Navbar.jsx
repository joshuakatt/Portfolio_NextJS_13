import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Button, Drawer, DrawerBody, DrawerFooter, DrawerCloseButton, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react'; // Updated imports
import { HamburgerIcon } from '@chakra-ui/icons';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showBackButton = router.pathname === '/projects' || router.pathname === '/profdev';

  const navigateToIndex = () => {
    router.push('/');
  };

  const navigateToPage = (page) => {
    router.push(page);
    onClose();
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
        <div className='flex justify-end'>
          <Button colorScheme='purple' size='lg' variant='outline' leftIcon={<HamburgerIcon />} onClick={onOpen}>
            Menu
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size='xs' // Setting drawer size to extra small
          >
            <DrawerOverlay />
            <DrawerContent bg="black">
              <DrawerCloseButton />
              <DrawerHeader>Navigate</DrawerHeader>
              <DrawerBody>
                <Button colorScheme='orange' onClick={() => navigateToPage('/')}>Home</Button>
                <Button colorScheme='orange' onClick={() => navigateToPage('/projects')}>Projects</Button>
                <Button colorScheme='orange' onClick={() => navigateToPage('/profdev')}>Professional Development</Button>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;