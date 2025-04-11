import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./LearningPage.module.css";
import PageNotFound from "../../404 error page/404Page";

function LearningPage() {
  const { course } = useParams();

  const initialLikes = parseInt(localStorage.getItem(`likes-${course}`)) || 0;
  const initialDislikes =
    parseInt(localStorage.getItem(`dislikes-${course}`)) || 0;

  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);

  useEffect(() => {
    localStorage.setItem(`likes-${course}`, likes.toString());
    localStorage.setItem(`dislikes-${course}`, dislikes.toString());
  }, [likes, dislikes, course]);

  let learningContent = null;

  if (course === "Introduction-to-html") {
    learningContent = (
      <div className={styles.LearningPageDiv}>
        <h2>Introduction to HTML</h2>
        <p>
          HTML (HyperText Markup Language) is the standard markup language used to create web pages. It structures web content using elements like headings, paragraphs, links, and multimedia. Understanding HTML is essential for any aspiring web developer.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/i8AJKNwYetQ?si=pGX4FxeZFL5NIP3r" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  } else if (course === "Advanced-Java") {
    learningContent = (
      <div className={styles.LearningPageDiv}>
        <h2>Advanced Java</h2>
        <p>
          Advanced Java extends the core Java programming by introducing technologies like JDBC, Servlets, JSP, and frameworks for building complex web and enterprise applications. It’s commonly used for creating dynamic websites and backend systems.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ae-r8hsbPUo?si=XYPddo-xH_mFjKAo" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  } else if (course === "Programming-in-C") {
    learningContent = (
      <div className={styles.LearningPageDiv}>
        <h2>Programming in C</h2>
        <p>
          C is a powerful general-purpose programming language that provides low-level access to memory and is widely used for system/software development. It’s considered a foundational language for many other modern languages.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VSEnzzjAm0c?si=EgRCtsj5L5bV6h4N" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  } else if (course === "Marketing-Management") {
    learningContent = (
      <div className={styles.LearningPageDiv}>
        <h2>Marketing Management</h2>
        <p>
          Marketing Management focuses on strategies and techniques for promoting and selling products or services. It involves market research, advertising, customer relationship management, and planning effective promotional campaigns.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cluHtc4Dcew?si=bbjvub8ELGNlnClt" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  } else if (course === "Numerical-Analysis") {
    learningContent = (
      <div className={styles.LearningPageDiv}>
        <h2>Numerical Analysis</h2>
        <p>
          Numerical analysis involves developing and analyzing algorithms for solving mathematical problems numerically. It’s crucial in engineering, physics, and computer science to approximate solutions to complex equations.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/iviiGB5vxLA?si=NdTnWTWVQPSYQ2Re" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  } else if (course === "Organic-Chemistry") {
    learningContent = (
      <div className={styles.LearningPageDiv}>
        <h2>Organic Chemistry</h2>
        <p>
          Organic chemistry is the study of carbon-containing compounds and their reactions. It plays a vital role in pharmaceuticals, petrochemicals, agriculture, and biochemistry by explaining the structure and behavior of organic molecules.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ai6G_7XYgO0?si=gWgxelAoxEKwmAvl" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  } else if (course === "Business-Communication") {
    learningContent = (
      <div className={styles.LearningPageDiv}>
        <h2>Business Communication</h2>
        <p>
          Business Communication is the process of sharing information within and outside an organization. It includes verbal and written communication, presentation skills, negotiation techniques, and the use of digital tools for communication.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1gDSCE4SAFg?si=FnwqenEGK1t46Cwp" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  } else if (course === "Multimedia-Technologies") {
    learningContent = (
      <div className={styles.LearningPageDiv}>
        <h2>Multimedia Technologies</h2>
        <p>
          Multimedia Technologies encompass the tools and techniques used to create and manage digital content like text, images, audio, animation, and video. It's widely used in entertainment, education, and advertising industries.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Syeu_l3sAJE?si=yBROXR08pEAHFKfh" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  } else if (course === "Electrodynamics") {
    learningContent = (
      <div className={styles.LearningPageDiv}>
        <h2>Electrodynamics</h2>
        <p>
          Electrodynamics is the branch of physics that deals with the study of electromagnetic forces and their interactions with charged particles. It forms the foundation of electrical engineering and modern communication systems.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HM3LDaw-3uM?si=ES8sVqG2fwnlS8LY" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  } else if (course === "Construction-Materials-and-Technology") {
    learningContent = (
      <div className={styles.LearningPageDiv}>
        <h2>Construction Materials and Technology</h2>
        <p>
          This subject focuses on the selection and use of materials like concrete, steel, wood, and composites in construction. It covers the latest building technologies and sustainability practices in civil engineering.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AIrOsmz1HIw?si=iD3D7s2XsnDIzx8C" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  }

  if (!learningContent) {
    return <PageNotFound />;
  }

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className={styles.eContent}>
      {learningContent}
      <div className={styles.btnContent}>
        <button onClick={handleLike} className={styles.likebtn}>
          Like ({likes})
        </button>
        <button onClick={handleDislike} className={styles.dislikebtn}>
          Dislike ({dislikes})
        </button>
      </div>
    </div>
  );
}

export default LearningPage;
