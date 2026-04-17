import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomeScreen from './screens/HomeScreen';
import MidtermScreen from './screens/MidtermScreen';

export default function App() {
  const location = useLocation();
  const pages = ['/', '/midterm'];
  const [currentIndex, setCurrentIndex] = useState(pages.indexOf(location.pathname));
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const nextIndex = pages.indexOf(location.pathname);
    setDirection(nextIndex - currentIndex);
    setCurrentIndex(nextIndex);
  }, [location.pathname]);
  
  const variants = {
    initial: (dir: number) => ({
      x: dir > 0 ? '50%' : dir < 0 ? '-50%' : 0,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-50%' : dir < 0 ? '50%' : 0,
      opacity: 0,
    }),
  };

  return (
    <div className="relative overflow-x-hidden min-h-screen">
      <Navigation />
      
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={location.pathname}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full"
        >
          <Routes location={location}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/midterm" element={<MidtermScreen />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
