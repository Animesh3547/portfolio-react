import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

function FeaturedProjects() {
  return (
    <motion.section
      className="featured"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">

        <h3>Featured Engineering Projects</h3>

        {/* DIGITAL TWIN PROJECT */}
        <div className="featured-card">

          <h4>Data-Driven Digital Twin for Smart Exhaust System</h4>

          <p className="featured-desc">
            Real-time monitoring and control system integrating ESP32-based 
            sensor data with a full-stack web dashboard for visualization, 
            logging, and system status tracking.
          </p>

          <div className="featured-block">
            <h5>Problem</h5>
            <p>
              Conventional exhaust systems lack real-time monitoring, fault detection,
              and predictive maintenance, leading to inefficiency and delayed response 
              to hazards like smoke or fire.
            </p>
          </div>

          <div className="featured-block">
            <h5>Approach</h5>
            <p>
              Built a full-stack system where sensor data is transmitted from ESP32 
              to a backend server and visualized on a web dashboard. Implemented 
              real-time monitoring, automated control logic, and system logging.
            </p>
          </div>

          <div className="featured-block">
            <h5>My Contribution</h5>
            <p>
              Developed backend data pipeline and frontend dashboard for real-time 
              visualization and monitoring. Designed system architecture for data flow.
            </p>
          </div>

          <div className="featured-block">
            <h5>What Makes It Strong</h5>
            <p>
              Implements a data-driven digital twin approach by reflecting real-world system behavior 
              in a web interface, with future ML integration for predictive maintenance 
              and intelligent control.
            </p>
          </div>

          <div className="featured-block">
            <h5>Status & Future Work</h5>
            <p>
              Currently functional with real-time monitoring and control. Future work 
              includes ML-based prediction of system health and remaining life of components.
               
            </p>
            <div>
              <a href="https://drp-project-topaz.vercel.app/" target="_blank" rel="noreferrer">
        View Project
      </a>
            </div>
            
                      <div className="image-wrapper">
          <img 
  src="/images/dash.jpeg" 
  alt="Digital Twin Dashboard"
  className="featured-img"
/>
<img 
  src="/images/dashboard.jpeg" 
  alt="Digital Twin Dashboard"
  className="featured-img"
/>
</div>
          </div>

        </div>

        {/* SMA PROJECT */}
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
              systems, leading to inefficiency and increased system complexity 
              under varying altitude conditions.
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

export default FeaturedProjects;