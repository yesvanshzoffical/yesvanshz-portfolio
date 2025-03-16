import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div className="hero"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img src="https://cdn.discordapp.com/avatars/1331993822137290796/a81275b95df7d463ad4a8de27178764d.png?size=1024" alt="Yesvanshz" />
      <h1>YesVanshz (Vansh)</h1>
      <p>
        15-year-old developer with 4 years of PHP experience, 1 year in Python,  
        6 months in Node.js, and 1 month in React.  
        Professional in Discord bot development.
      </p>
    </motion.div>
  );
}
