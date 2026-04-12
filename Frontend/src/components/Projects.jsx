import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

function Projects() {
  return (
    <motion.section id="projects" className="projects"
    variants={fadeInUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <h3>Projects</h3>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </motion.section>
  );
}

export default Projects;