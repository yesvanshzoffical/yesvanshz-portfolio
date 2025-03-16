import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <h2>Contact</h2>
      <p>GitHub: <a href="#">github.com/yesvanshzoffical</a></p>
      <p>Discord: <span style={{ color: "cyan" }}>yesvanshz</span></p>
      <p>Email: <a href="mailto:yesvanshz@example.com">support@notvanshz.online</a></p>
    </motion.div>
  );
}
