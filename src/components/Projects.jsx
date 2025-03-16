import { motion } from "framer-motion";

const projects = [
  { name: "Portfolio Website", description: "A modern React portfolio", link: "#" },
  { name: "Discord Bot", description: "A bot with moderation & music", link: "#" },
  { name: "E-commerce Site", description: "A full-stack web store", link: "#" },
];

export default function Projects() {
  return (
    <motion.div className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div key={index} className="project-card" whileHover={{ scale: 1.05 }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} style={{ color: "cyan" }}>View Project</a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
