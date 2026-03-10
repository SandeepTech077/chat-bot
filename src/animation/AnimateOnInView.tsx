import { motion, Variants } from "framer-motion";

interface AnimateOnInViewProps {
  children?: React.ReactNode; 
  variants: Variants; 
  [key: string]: any; 
}

const AnimateOnInView = ({ children, variants,...props }: AnimateOnInViewProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      transition={{ duration: 1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnInView;
