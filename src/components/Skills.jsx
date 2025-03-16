import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaPhp, FaDiscord } from "react-icons/fa";

export default function Skills() {
  return (
    <motion.div className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <h2>Skills</h2>
      <div className="skills-icons">
        <motion.div whileHover={{ scale: 1.1 }}><FaReact style={{ color: "cyan" }} /></motion.div>
        <motion.div whileHover={{ scale: 1.1 }}><FaNodeJs style={{ color: "green" }} /></motion.div>
        <motion.div whileHover={{ scale: 1.1 }}><FaPython style={{ color: "yellow" }} /></motion.div>
        <motion.div whileHover={{ scale: 1.1 }}><FaPhp style={{ color: "purple" }} /></motion.div>
        <motion.div whileHover={{ scale: 1.1 }}><FaDiscord style={{ color: "blue" }} /></motion.div>
      </div>
    </motion.div>
  );
}
