import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};


function FeaturedProject() {
  return (
    <motion.section className="featured"
    variants={fadeInUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">

        <h3>🚀 Featured Engineering Project</h3>

        <div className="featured-card">

          <h4>SMA-Actuated Propeller Pitch Control System</h4>

          <p className="featured-desc">
            Designing an SMA-actuated mechanism to dynamically adjust propeller 
            blade pitch for maintaining thrust and improving efficiency under 
            varying air density conditions.
          </p>

          <div className="featured-block">
            <h5>Problem</h5>
            <p>
              Conventional propellers rely on fixed pitch or complex mechanical 
              systems, leading to inefficiency and increased system weight under 
              varying altitude conditions.
            </p>
          </div>

          <div className="featured-block">
            <h5>Approach</h5>
            <p>
              Developed mathematical models and ML-based analysis (Linear Regression, 
              Random Forest) to study relationships between pitch angle, air density, 
              temperature, and thrust. Investigated SMA actuation using Joule heating 
              and thermal behavior.
            </p>
          </div>

          <div className="featured-block">
            <h5>What Makes It Unique</h5>
            <p>
              Replaces traditional motor/gear-based pitch control with lightweight 
              SMA actuation, integrating aerodynamics, thermodynamics, and machine 
              learning for adaptive propulsion systems.
            </p>
          </div>

          <div className="featured-block">
            <h5>Status</h5>
            <p>
              Currently in modeling and research phase. Simulation and validation 
              are in progress; no physical prototype developed yet.
            </p>
          </div>

          <div className="featured-block">
            <h5>Next Steps</h5>
            <p>
              Improve physics-based models, enhance ML predictions, and validate 
              system performance through simulation before moving toward 
              implementation.
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default FeaturedProject;