import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">

        <img
          src="https://avatars.githubusercontent.com/u/9919?v=4"
          alt="Profile"
          className="profile-pic"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%"
          }}
        />

        <h2>Hi, I'm Animesh Singh</h2>
        <p>Frontend Developer | UI/UX Designer</p>

        <a href="#projects" className="btn">
          View Projects
        </a>

      </div>
    </motion.section>
  );
}

export default Hero;