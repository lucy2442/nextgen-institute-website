import React from "react";
import { Link } from "react-router-dom";
import styles from "./AdmissionList.module.css";

const notices = [
  {
    id: 1,
    text: "UG Admission 2025: Merit List Released for B.Tech & B.Sc",
  },
  {
    id: 2,
    text: "PG Admission 2025: Document Verification from April 12",
  },
  {
    id: 3,
    text: "Provisional Admission List for MBA - 2025 Batch",
  },
  {
    id: 4,
    text: "Counselling Schedule for M.A. English - April 18 & 19",
  },
  {
    id: 5,
    text: "Revised Dates for Diploma Admission Interviews",
  },
  {
    id: 6,
    text: "Spot Admission Round for B.Com (Hons) - April 15",
  },
];

function AdmissionNoticeBoard() {
  return (
    <>
      <div className={styles.noticeBoard}>
        <h2 className={styles.noticeheading}>Admission List</h2>
        <ul className={styles.noticeList}>
          {notices.map((notice) => (
            <Link to={`/admission-list/${notice.text}`} key={notice.id}>
              <li className={styles.noticeItem}>
                {notice.text}
                <span className={styles.badge}>
                  <img
                    src="http://results.amucontrollerexams.com/result/cons/test.gif"
                    alt="Badge"
                    height="20"
                    width="35"
                  />
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AdmissionNoticeBoard;
