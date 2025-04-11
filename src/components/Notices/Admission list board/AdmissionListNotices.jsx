import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../../404 error page/404Page";
import styles from './AdmissionListNotices.module.css';

function AdmissionListNotices() {
  const { notice } = useParams();

  let noticeContent = null;

  if (notice === "UG Admission 2025: Merit List Released for B.Tech & B.Sc") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          UG Admission 2025: Merit List Released for B.Tech & B.Sc
        </h2>
        <p>
          The merit list for B.Tech and B.Sc undergraduate programs has been released. 
          Please check your roll number and follow the next steps for counselling and document submission.
        </p>
      </div>
    );
  } else if (notice === "PG Admission 2025: Document Verification from April 12") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          PG Admission 2025: Document Verification from April 12
        </h2>
        <p>
          Candidates selected for PG programs are required to attend document verification 
          from April 12. Bring all original documents along with a copy for submission.
        </p>
      </div>
    );
  } else if (notice === "Provisional Admission List for MBA - 2025 Batch") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Provisional Admission List for MBA - 2025 Batch
        </h2>
        <p>
          The provisional list of selected candidates for the MBA 2025 batch has been published. 
          Final admission is subject to document verification and fee payment.
        </p>
      </div>
    );
  } else if (notice === "Counselling Schedule for M.A. English - April 18 & 19") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Counselling Schedule for M.A. English - April 18 & 19
        </h2>
        <p>
          Counselling for admission to M.A. English will be held on April 18 and 19. 
          Please arrive at the venue with all necessary documents by 9:00 AM.
        </p>
      </div>
    );
  } else if (notice === "Revised Dates for Diploma Admission Interviews") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Revised Dates for Diploma Admission Interviews
        </h2>
        <p>
          Due to administrative reasons, the interview dates for diploma program admissions have been revised. 
          Check the updated schedule on the official notice board.
        </p>
      </div>
    );
  } else if (notice === "Spot Admission Round for B.Com (Hons) - April 15") {
    noticeContent = (
      <div className={styles.noticeDiv}>
        <h2 className={styles.noticeHeading}>
          Spot Admission Round for B.Com (Hons) - April 15
        </h2>
        <p>
          A spot admission round will be held for B.Com (Hons) on April 15 at the campus admission hall. 
          Candidates must carry all original documents and pay the fee on the same day if selected.
        </p>
      </div>
    );
  }

  if (!noticeContent) {
    return <PageNotFound />;
  }

  return <div>{noticeContent}</div>;
}

export default AdmissionListNotices;
