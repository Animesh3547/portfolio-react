import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", form);

    alert("Message captured (no backend yet)");
  };

  return (
   <motion.section
  id="about"
  className="about"
  variants={fadeInUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
      <div className="container">
        <h3>Contact Me</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;