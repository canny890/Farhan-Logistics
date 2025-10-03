import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="hidden"
        animate="show"
        exit="exit"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
              when: 'beforeChildren',
              staggerChildren: 0.1,
            },
          },
          exit: {
            opacity: 0,
            y: -20,
            transition: {
              duration: 0.2,
              ease: [0.4, 0, 0.6, 1],
            },
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
