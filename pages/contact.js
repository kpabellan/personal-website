import { Contact } from '../components/Contact';
import { motion } from 'framer-motion';

export default function contact() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.div>
    </>
  );
}