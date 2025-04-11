import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Card from "./Home Cards/Card";
import NoticeBoard from "../Notices/Notices and updates board/NoticeBoard";
import AdmissionNoticeBoard from "../Notices/Admission list board/AdmissionList";
import creator from "../images/creator.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  const marqueeRef = useRef(null);

  const stopMarquee = () => {
    marqueeRef.current.stop();
  };

  const startMarquee = () => {
    marqueeRef.current.start();
  };

  return (
    <div className={styles.home}>
      {/* section for Carousel */}
      <section className={styles.carousel}>
        <div className={styles.carouselContainer}>
          <Slider {...carouselSettings}>
            <div>
              <img
                src="https://media.istockphoto.com/id/477633485/photo/team-of-successful-university-graduates-raising-their-convocation-caps.jpg?s=612x612&w=0&k=20&c=Cg9aAKKOFJkukureA3hzdnXin42O-GCBP60b4h5CLic="
                alt="Carousel 1"
                width={1600}
                height={600}
                className={styles.carouselImage}
              />
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/1254127323/photo/businesswoman-holding-a-speech.jpg?s=612x612&w=0&k=20&c=HpdVnNM-fIjoy1NI-iE01H4oDKn3DScwr1jqkEf9aMk="
                alt="Carousel 3"
                width={1600}
                height={600}
                className={styles.carouselImage}
              />
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/171271182/photo/delhi-university-building-and-corridor.jpg?s=612x612&w=0&k=20&c=3vcPST9RRxk71Xbbli8S7v4ytRRZ0yBiVh5eRPItHS0="
                alt="Carousel 2"
                width={1600}
                height={600}
                className={styles.carouselImage}
              />
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/914314318/photo/young-man-using-laptop-with-female-student-watching-and-smiling.jpg?s=612x612&w=0&k=20&c=ky2a8mV2Fw8v4QYXFUtxAOOMs14lbOM5BPVyK1xw7-k="
                alt="Carousel 3"
                width={1600}
                height={600}
                className={styles.carouselImage}
              />
            </div>
          </Slider>
        </div>
      </section>
      {/* section for latest news marquee */}
      <section className={styles.marqueediv}>
        <div className={styles.latestnews}>Latest news</div>
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          onMouseOver={stopMarquee}
          onMouseOut={startMarquee}
          ref={marqueeRef}
        >
          <Link to="/latest-news/online-noc">
            <span>Online NOC and Affiliation System</span>
          </Link>
          <Link to="/latest-news/registrar-notice">
            <span>Registrar Notice-International Day of Non-Violence</span>
          </Link>
          <Link to="/latest-news/recruitment-advertisement">
            <span>Recruitment Advertisement-Guest Faculty 2023-24</span>
          </Link>
        </marquee>
      </section>
      {/* section for notice boards */}
      <section className={styles.collegenotices}>
        <NoticeBoard />
        <AdmissionNoticeBoard />
      </section>
      {/* section for College Portals */}
      <section className={styles.portals}>
        <h2>College Portals</h2>
        <div className={styles.portalLinks}>
          <Link to={"/results"} className={styles.portalLink}>
            <div className={styles.portalbtn}>Result</div>
          </Link>
          <Link to={"/academic-staff"} className={styles.portalLink}>
            <div className={styles.portalbtn}>Academic staff</div>
          </Link>
          <Link to={"/NEP-syllabus"} className={styles.portalLink}>
            <div className={styles.portalbtn}>NEP syllabus</div>
          </Link>
         
          <Link to={"/e-learning"} className={styles.portalLink}>
            <div className={styles.portalbtn}>E-Learning</div>
          </Link>
        </div>
      </section>
      {/* section for Important person of the university */}
      <section className={styles.importantPersonSection}>
      {/* Governor of Maharashtra */}
      <div className={styles.personDiv}>
        <img
          src="https://cdnbbsr.s3waas.gov.in/s3c8758b517083196f05ac29810b924aca/uploads/2024/07/202407311873496196-scaled.jpg"
          alt="Governor of Maharashtra"
          className={styles.personImg}
        />
        <div className={styles.personDetailDiv}>
          <h2 className={styles.personName}>Shri C. P. Radhakrishnan</h2>
          <p className={styles.personTitle}>
            Hon’ble Governor of Maharashtra &amp; Chancellor of Universities in Maharashtra
          </p>
          <button className={styles.profileBtn}>
            <a
              href="https://rajbhavan-maharashtra.gov.in/en/governors-profile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </button>
        </div>
      </div>

      {/* Vice-Chancellor of the University of Mumbai */}
      <div className={styles.personDiv}>
        <img
          src="https://mu.ac.in/wp-content/uploads/2025/03/Photograph-Prof.-Ravindra-Kulkarni-1.jpg"
          alt="Vice-Chancellor of the University of Mumbai"
          className={styles.personImg}
        />
        <div className={styles.personDetailDiv}>
          <h2 className={styles.personName}>Prof. Ravindra Dattatray Kulkarni</h2>
          <p className={styles.personTitle}>
            Vice-Chancellor, University of Mumbai
          </p>
          <button className={styles.profileBtn}>
            <a
              href="https://mu.ac.in/university-of-mumbai-vice-chancellor"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </button>
        </div>
      </div>

      {/* Minister of School Education, Maharashtra */}
      <div className={styles.personDiv}>
        <img
          src="https://education.maharashtra.gov.in/images/DyCM_Eknath_Shinde.jpg"
          alt="Minister of School Education, Maharashtra"
          className={styles.personImg}
        />
        <div className={styles.personDetailDiv}>
          <h2 className={styles.personName}>Shri.Eknath Shinde</h2>
          <p className={styles.personTitle}>
          Hon'ble Dy. Chief Minister,
          Maharashtra State.
          </p>
          <button className={styles.profileBtn}>
            <a
              href="https://education.maharashtra.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </button>
        </div>
      </div>
    </section>
      {/* section for College Feature Cards */}
      <section className={styles.cards}>
        <h2>Explore Our Features</h2>
        <div className={styles.cardContainer}>
          <Link to={"/academic-activities"}>
            <Card
              title="Academic Programs"
              description="Discover our wide range of academic programs."
              imageUrl="https://media.istockphoto.com/id/1024531876/photo/key-success-in-graduate-study-abroad-program-and-open-or-expand-world-view-experience-concept.jpg?s=612x612&w=0&k=20&c=JmOTvUiZgXG8okKmoakKD_CGi0j8cd_mC5HhT3ayysY="
            />
          </Link>
          <Link to={"/campus"}>
            <Card
              title="Campus Life"
              description="Explore our vibrant campus life and activities."
              imageUrl="https://media.istockphoto.com/id/1298197207/vector/children-online-learning-concept.jpg?s=612x612&w=0&k=20&c=GukmEs0Lc27npsyAq5VL87-kGkD2HD_pJJ6rFpYP8BY="
            />
          </Link>
          <Link to={"/admission-process"}>
            <Card
              title="Admission Process"
              description="Learn about our admission procedures."
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZowIaxqvuGBIgTpIJ6oz3GRhc0qo7rnEtQ&usqp=CAU"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
