import { motion } from "framer-motion";

function ProjectCard({ title, description, link }) {
  return (
 <motion.div
  className="project-card"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.4 }}
>
      <h4>{title}</h4>
      <p>{description}</p>

      <a href={link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </motion.div>
  );
}

export default ProjectCard;