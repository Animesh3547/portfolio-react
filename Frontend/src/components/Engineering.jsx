import { motion } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

function Engineering() {
 const focusAreas = [
  {
    title: "Aerodynamics",
    desc: "Understanding lift, drag, and flow behavior. Target: CFD simulation and airfoil analysis."
  },
  {
    title: "Propulsion Systems",
    desc: "Exploring thrust generation and actuation systems including SMA-based mechanisms."
  },
  {
    title: "Simulation (CFD/FEA)",
    desc: "Learning numerical methods to simulate real-world mechanical systems."
  },
  {
    title: "Machine Learning",
    desc: "Applying ML to engineering data, prediction, and simulation optimization."
  },
  {
    title: "Digital Twin Systems",
    desc: "Connecting real-world data with simulation models for intelligent systems."
  }
];

  return (
    <motion.section className="engineering"
    variants={fadeInUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">

        <h3>Engineering Focus</h3>

        <p className="engineering-desc">
          I am building towards a strong foundation in mechanical engineering 
          combined with machine learning, focusing on simulation, aerodynamics, 
          and intelligent engineering systems.
        </p>

        <div className="focus-grid">
          {focusAreas.map((area) => (
            <div className="focus-card" key={area.title}>
              <h4>{area.title}</h4>
              <p>{area.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}

export default Engineering;