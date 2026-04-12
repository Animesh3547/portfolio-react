import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function About() {
  const profiles = [
    {
      name: "GitHub",
      link: "https://github.com/Animesh3547",
      icon: <FaGithub />
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/animesh-singh-ab1353366",
      icon: <FaLinkedin />
    },
    {
      name: "Instagram",
      link: "https://instagram.com/animesh._.1",
      icon: <FaInstagram />
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h3>About Me</h3>

        <p>
          I'm a passionate web developer who loves building clean and
          user-friendly websites.
        </p>

        <div className="profiles">
          <h4>Find me on</h4>

          <ul className="profile-links">
            {profiles.map((profile) => (
              <li key={profile.name}>
                <a href={profile.link} target="_blank" rel="noreferrer">
                  {profile.icon}
                  <span>{profile.name}</span>
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}

export default About;