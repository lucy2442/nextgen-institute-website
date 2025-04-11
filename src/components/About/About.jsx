import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h2>About NextGen Institute of Technology</h2>
      <p>
        Established in 2005, NextGen Institute of Technology is a forward-thinking institution
        dedicated to delivering world-class education in the fields of engineering, technology,
        and applied sciences. Located in a vibrant academic hub, we offer cutting-edge undergraduate
        and postgraduate programs designed to meet the needs of tomorrow’s leaders.
      </p>

      <h3>Our Mission</h3>
      <p>
        Our mission is to cultivate innovation, critical thinking, and real-world skills in our students.
        We are committed to building a community of lifelong learners and global citizens through
        hands-on learning, interdisciplinary research, and value-based education.
      </p>

      <h3>Our Faculty</h3>
      <p>
        Our distinguished faculty includes industry experts, researchers, and academicians who bring
        real-world insights into the classroom. Their dedication goes beyond teaching—they mentor,
        guide, and inspire students to reach their full potential through collaborative learning and innovation.
      </p>

      <h3>Infrastructure</h3>
      <p>
        The NextGen campus features smart classrooms, AI & IoT-enabled labs, a digital library with
        24/7 access, tech innovation hubs, and a green, student-friendly environment. We also provide
        modern hostels, cafeterias, and sports complexes to ensure a well-rounded campus experience.
      </p>

      <h3>Why Choose Us?</h3>
      <p>
        At NextGen, we believe in shaping not just professionals, but pioneers. With strong industry
        linkages, global exposure programs, and 100% placement assistance, we prepare our students
        to thrive in a fast-evolving world. Your journey to success starts here.
      </p>
    </div>
  );
}

export default About;
