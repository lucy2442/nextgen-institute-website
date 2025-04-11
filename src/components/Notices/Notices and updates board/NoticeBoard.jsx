import React from "react";
import { Link } from "react-router-dom";
import styles from "./NoticeBoard.module.css";

const notices = [
  {
    id: 1,
    text: "Final Year Project Submission Deadline: April 30, 2025",
  },
  {
    id: 2,
    text: "Admit Cards Released for Semester Exams - Download Now",
  },
  {
    id: 3,
    text: "Campus Placement Drive by Infosys on April 18, 2025",
  },
  {
    id: 4,
    text: "Holiday Notice: University Closed on Ambedkar Jayanti (April 14)",
  },
  {
    id: 5,
    text: "Workshop on AI & Data Science - Register Before April 15",
  },
  {
    id: 6,
    text: "Last Date to Apply for Revaluation: April 20, 2025",
  },
];

function NoticeBoard() {
  return (
    <>
      <div className={styles.noticeBoard}>
        <h2 className={styles.noticeheading}>Notices & Updates</h2>
        <ul className={styles.noticeList}>
          {notices.map((notice) => (
            <Link to={`/notices-and-updates/${notice.text}`} key={notice.id}>
              <li className={styles.noticeItem}>
                {notice.text}
                <span className={styles.badge}>
                  <img
                    src="http://results.amucontrollerexams.com/result/cons/test.gif"
                    alt="new"
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

export default NoticeBoard;
