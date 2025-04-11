import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.title}>Contact Us</h3>
          <p className={styles.contactInfo}>Email: tejaswinitak24@gmail.com</p>
          <p className={styles.contactInfo}>
            
          </p>
          <p className={styles.contactInfo}>Phone:+91-9561821844</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li>
              <a className={styles.link} href="/">
                Home
              </a>
            </li>
            <li>
              <a className={styles.link} href="/courses">
                Courses
              </a>
            </li>
            <li>
              <a className={styles.link} href="/admission">
                Admission
              </a>
            </li>
            <li>
              <a className={styles.link} href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a
              className={styles.socialIcon}
              href="https://github.com/lucy2442"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            
            <a
              className={styles.socialIcon}
              href="www.linkedin.com/in/tejaswini-tak24"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <Link to={"/share_your_feedback"}>
            <div className={styles.feedbackDiv}>Share your feedback</div>
          </Link>
        </div>
      </div>
      <p className={styles.creator}>&copy; All rights reserved 2025 , Tejaswini Tak</p>
    </footer>
  );
}

export default Footer;
