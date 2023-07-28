import { Introduction } from '../components/Introduction';
import { Projects } from '../components/Projects';
import { Technologies } from '../components/Technologies';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Introduction />
        <Projects />
        <Technologies />
      </motion.div>
    </div>
  );
}