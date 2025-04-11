import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../../404 error page/404Page";
import styles from "./Notice&Updates.module.css";

function NoticesAndUpdates() {
  const { notice } = useParams();

  let noticeContent = null;

  if (notice === "Final Year Project Submission Deadline: April 30, 2025") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Final Year Project Submission Deadline: April 30, 2025
        </h2>
        <p>
          All final year students must submit their project reports and code by April 30, 2025.
          No extensions will be granted beyond this date.
        </p>
      </div>
    );
  } else if (notice === "Admit Cards Released for Semester Exams - Download Now") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Admit Cards Released for Semester Exams - Download Now
        </h2>
        <p>
          Admit cards for the upcoming semester exams are now available on the student portal. 
          Please download and print them before entering the examination hall.
        </p>
      </div>
    );
  } else if (notice === "Campus Placement Drive by Infosys on April 18, 2025") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Campus Placement Drive by Infosys on April 18, 2025
        </h2>
        <p>
          Infosys is conducting a placement drive for final-year students. Register via the T&P cell portal by April 15, 2025.
        </p>
      </div>
    );
  } else if (notice === "Holiday Notice: University Closed on Ambedkar Jayanti (April 14)") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Holiday Notice: University Closed on Ambedkar Jayanti (April 14)
        </h2>
        <p>
          The university will remain closed on April 14 in observance of Dr. B.R. Ambedkar Jayanti.
        </p>
      </div>
    );
  } else if (notice === "Workshop on AI & Data Science - Register Before April 15") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Workshop on AI & Data Science - Register Before April 15
        </h2>
        <p>
          Attend our expert-led workshop on AI and Data Science on April 20, 2025. 
          Limited seats! Register at the events portal before April 15.
        </p>
      </div>
    );
  } else if (notice === "Last Date to Apply for Revaluation: April 20, 2025") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Last Date to Apply for Revaluation: April 20, 2025
        </h2>
        <p>
          Students who wish to apply for revaluation of exam papers must submit their applications by April 20, 2025.
        </p>
      </div>
    );
  }

  if (!noticeContent) {
    return <PageNotFound />;
  }

  return <div>{noticeContent}</div>;
}

export default NoticesAndUpdates;
