import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./CourseDetails.module.css";

function CourseDetails() {
  const { id } = useParams();

  const courseDetails = {
    1: {
      title: "Bachelor of Computer Applications (BCA)",
      description:
        "BCA is a 3-year undergraduate program focused on computer science and applications including programming, databases, and web development.",
      eligibility: "10+2 in any stream with mathematics",
      duration: "3 years",
      jobOpportunities: [
        "Software Developer",
        "Web Developer",
        "Database Administrator",
        "System Analyst",
      ],
    },
    2: {
      title: "Bachelor of Business Administration (BBA)",
      description:
        "BBA is a management degree providing knowledge in business operations, finance, marketing, and HR practices.",
      eligibility: "10+2 in any stream",
      duration: "3 years",
      jobOpportunities: [
        "Business Analyst",
        "Marketing Executive",
        "HR Executive",
        "Sales Manager",
      ],
    },
    3: {
      title: "Master of Science in Computer Science (MSC CS)",
      description:
        "MSC CS is a postgraduate degree in computer science, covering advanced topics in AI, Data Science, and Programming.",
      eligibility: "BSc in Computer Science or BCA",
      duration: "2 years",
      jobOpportunities: [
        "Data Scientist",
        "Software Engineer",
        "AI Developer",
        "Research Analyst",
      ],
    },
    4: {
      title: "Master of Science in Mathematics (MSC Math)",
      description:
        "MSC Math explores pure and applied mathematics, useful in academics, research, and analytical roles.",
      eligibility: "BSc in Mathematics",
      duration: "2 years",
      jobOpportunities: [
        "Mathematician",
        "Statistician",
        "Research Scientist",
        "Data Analyst",
      ],
    },
    5: {
      title: "Master of Science in Chemistry (MSC Chemistry)",
      description:
        "MSC Chemistry provides in-depth knowledge of organic, inorganic, and physical chemistry.",
      eligibility: "BSc in Chemistry",
      duration: "2 years",
      jobOpportunities: [
        "Chemist",
        "Quality Control Analyst",
        "Research Scientist",
        "Pharmaceutical Associate",
      ],
    },
    6: {
      title: "Master of Science in Physics (MSC Physics)",
      description:
        "MSC Physics focuses on classical and modern physics, mathematical methods, and quantum mechanics.",
      eligibility: "BSc in Physics",
      duration: "2 years",
      jobOpportunities: [
        "Physicist",
        "Research Assistant",
        "Data Analyst",
        "Professor",
      ],
    },
    7: {
      title: "Bachelor of Commerce (BCOM)",
      description:
        "BCOM is a degree in commerce covering accounting, taxation, economics, and finance.",
      eligibility: "10+2 in Commerce or any stream",
      duration: "3 years",
      jobOpportunities: [
        "Accountant",
        "Tax Consultant",
        "Auditor",
        "Finance Analyst",
      ],
    },
    8: {
      title: "Master of Commerce (MCOM)",
      description:
        "MCOM focuses on advanced studies in commerce, including corporate finance, business law, and economics.",
      eligibility: "BCOM or equivalent",
      duration: "2 years",
      jobOpportunities: [
        "Senior Accountant",
        "Finance Manager",
        "Bank Officer",
        "Lecturer",
      ],
    },
    9: {
      title: "Master of Computer Applications (MCA)",
      description:
        "MCA is a postgraduate degree in computer application development and IT system management.",
      eligibility: "BCA or equivalent",
      duration: "2 years",
      jobOpportunities: [
        "Software Engineer",
        "IT Manager",
        "System Analyst",
        "App Developer",
      ],
    },
    10: {
      title: "Bachelor of Engineering (BE)",
      description:
        "BE is a 4-year technical undergraduate degree offering specializations like Computer, Mechanical, Civil, etc.",
      eligibility: "10+2 with PCM",
      duration: "4 years",
      jobOpportunities: [
        "Software Engineer",
        "Mechanical Engineer",
        "Civil Engineer",
        "Electrical Engineer",
      ],
    },
    11: {
      title: "Bachelor of Technology in Information Technology (BTECH IT)",
      description:
        "BTech IT deals with the design and management of computer-based information systems.",
      eligibility: "10+2 with PCM",
      duration: "4 years",
      jobOpportunities: [
        "Software Developer",
        "IT Consultant",
        "Security Analyst",
        "Network Administrator",
      ],
    },
    12: {
      title: "Bachelor of Science in PCM (BSC PCM)",
      description:
        "BSC PCM is a science degree covering Physics, Chemistry, and Mathematics as core subjects.",
      eligibility: "10+2 in science",
      duration: "3 years",
      jobOpportunities: [
        "Scientist Assistant",
        "Lab Technician",
        "Teaching",
        "Data Analyst",
      ],
    },
    13: {
      title: "Bachelor of Science in Computer Science (BSC CS)",
      description:
        "BSC CS covers theoretical foundations and practical techniques for computer systems and software development.",
      eligibility: "10+2 in science",
      duration: "3 years",
      jobOpportunities: [
        "Web Developer",
        "Database Admin",
        "System Programmer",
        "Software Tester",
      ],
    },
  };

  const course = courseDetails[id];

  return (
    <div className={styles["course-details-container"]}>
      <div className={styles["course-details"]}>
        {course ? (
          <>
            <h2 className={styles.title}>{course.title}</h2>
            <p><strong>Description:</strong> {course.description}</p>
            <p><strong>Eligibility:</strong> {course.eligibility}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Job Opportunities:</strong></p>
            <ul>
              {course.jobOpportunities.map((job, index) => (
                <li key={index}>{job}</li>
              ))}
            </ul>
            <Link to="/admission">
              <button className={styles.applybtn}>Apply Now</button>
            </Link>
          </>
        ) : (
          <>
            <h2 className={styles.title}>Course Not Found</h2>
            <p>We're sorry, but the course you're looking for doesn't exist or has not been added yet.</p>
            <Link to="/courses">
              <button className={styles.applybtn}>Back to Courses</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default CourseDetails;
