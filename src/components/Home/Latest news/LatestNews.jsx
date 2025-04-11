import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../../404 error page/404Page";
import styles from './LatestNews.module.css';

function LatestNews() {
  const { newsName } = useParams();

  let newsContent = null;

  if (newsName === "online-noc") {
    newsContent = (
      <div className={styles.newsDiv}>
        <h2 className={styles.newsHeading}>Online NOC and Affiliation System</h2>
        <p>
          The Online No Objection Certificate (NOC) and Affiliation System is an innovative step toward simplifying institutional compliance processes. This digital solution enables colleges and educational institutes to submit applications, monitor statuses, and receive approvals for NOC and affiliation requests seamlessly online. The platform ensures complete transparency, faster processing time, and a paperless experience. Authorities can track pending applications, manage documentation, and send notifications through a centralized dashboard. Institutes are encouraged to register early to avoid last-minute rush and ensure smooth academic operations for the upcoming session.
        </p>
        <p>
          This transformation not only enhances administrative efficiency but also aligns with the government's digital initiatives to promote e-governance in education. Stakeholders, including principals and management representatives, can use their unique login credentials to manage applications and track their status in real-time. The technical support team is available for resolving queries and guiding users throughout the submission and verification process.
        </p>
      </div>
    );
  } else if (newsName === "registrar-notice") {
    newsContent = (
      <div className={styles.newsDiv}>
        <h2 className={styles.newsHeading}>Registrar Notice - International Day of Non-Violence</h2>
        <p>
          The University is proud to announce its participation in the observance of the International Day of Non-Violence on October 2nd, commemorating the birth anniversary of Mahatma Gandhi. All students, faculty members, and administrative staff are requested to take part in a peaceful march and awareness seminar scheduled on campus. This event aims to promote values of harmony, peace, and social justice, especially in the academic context.
        </p>
        <p>
          The Registrar's office has issued a circular urging departments to organize essay competitions, poster-making activities, and dialogue sessions to spread awareness about non-violence and conflict resolution. Attendance will be considered for internal marks in accordance with the university’s guidelines for extracurricular participation. Let us come together as a community and reinforce the importance of non-violence in today’s world.
        </p>
      </div>
    );
  } else if (newsName === "recruitment-advertisement") {
    newsContent = (
      <div className={styles.newsDiv}>
        <h2 className={styles.newsHeading}>Recruitment Advertisement - Guest Faculty 2023-24</h2>
        <p>
          The University invites applications from qualified candidates for the post of Guest Faculty for the academic year 2023-24 across various departments. This opportunity is ideal for scholars and industry professionals who wish to contribute to academic excellence and share their expertise with aspiring students. Applicants must possess at least a Master's degree in the relevant discipline and should preferably have teaching experience or industry exposure.
        </p>
        <p>
          The last date to submit applications is 30th April 2025. Shortlisted candidates will be invited for interviews in May, and final selections will be announced on the university website. The guest faculty shall be remunerated as per UGC norms and will be expected to take 8–12 sessions per week. For more information, visit the careers section of the university portal or contact the recruitment cell at recruitment@universitydomain.edu.
        </p>
      </div>
    );
  }

  if (!newsContent) {
    return <PageNotFound />;
  }

  return <div>{newsContent}</div>;
}

export default LatestNews;
