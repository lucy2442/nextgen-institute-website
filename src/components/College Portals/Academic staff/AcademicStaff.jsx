import React from "react";
import styles from "./AcademicStaff.module.css";

function AcademicStaff() {
  return (
    <div className={styles.academicStaff}>
      <h2>Academic Staff Details</h2>
      <p>
        Our college is proud to have a diverse and passionate academic team that brings expertise, experience, and inspiration into every classroom.
      </p>

      <h3>Meet Our Professors</h3>
      <ul className={styles.professorsList}>
        <li>
          <img
            src="https://media.istockphoto.com/id/1322991099/photo/indian-man-in-smart-casual-shirt-using-laptop-indoor.jpg?s=612x612&w=0&k=20&c=pNNBF7yrQ5rW67MhYZnJ1iPMjw5o-RVE0Mk2dZdsV8w="
            alt="Professor 1"
          />
          <p>Dr. Karan Bhatt</p>
          <p>Department of Information Technology</p>
        </li>
        <li>
          <img
            src="https://media.istockphoto.com/id/1148232025/photo/teacher-raising-trophy-and-giving-speech.jpg?s=612x612&w=0&k=20&c=ifmQew4_cQ8ghzmsc6rg-y1yXJq0q1esayo64k_WsSI="
            alt="Professor 2"
          />
          <p>Prof. Neeraj Desai</p>
          <p>Department of English Literature</p>
        </li>
        <li>
          <img
            src="https://media.istockphoto.com/id/1366724990/photo/smiling-computer-science-teacher-using-laptop-during-a-class-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=zVHFiRTY0aSu3zpDGM3jWV1sXBkPurXfr4GmClgvsiI="
            alt="Professor 3"
          />
          <p>Dr. Swati Kulkarni</p>
          <p>Department of Business Studies</p>
        </li>
        <li>
          <img
            src="https://media.istockphoto.com/id/1354640844/photo/portrait-of-happy-high-school-teacher-in-the-classroom-looking-at-camera.jpg?s=612x612&w=0&k=20&c=KD2uhqHrVIQpFbnb8oe6C3abBBW6Fq2n1dFjkGPzKLE="
            alt="Professor 4"
          />
          <p>Prof. Vinay Patil</p>
          <p>Department of Physics</p>
        </li>
        <li>
          <img
            src="https://media.istockphoto.com/id/1330255708/photo/portrait-of-smiling-teacher-in-school-corridor-with-books-in-hand.jpg?s=612x612&w=0&k=20&c=uL_vENUw7dccgUwjGcIwMMU_5Ew9BM5C8A0jInwn_hk="
            alt="Professor 5"
          />
          <p>Prof. Meera Tiwari</p>
          <p>Department of Fine Arts</p>
        </li>
        <li>
          <img
            src="https://media.istockphoto.com/id/1333800469/photo/teacher-guiding-student-on-there-project-in-lab-teacher-helping-student-in-there-project-in.jpg?s=612x612&w=0&k=20&c=-qXcWxSZZk_pryMS8RZYQXufQxKuQUE7pmNMo13gvYo="
            alt="Professor 6"
          />
          <p>Dr. Rajeev Mishra</p>
          <p>Department of Mechanical Engineering</p>
        </li>
        <li>
          <img
            src="https://media.istockphoto.com/id/986272220/photo/teenage-boy-receives-help-from-attentive-science-teacher.jpg?s=612x612&w=0&k=20&c=I9bvwJ7C_1jr6x8IRlUmvH0bOHDY8oQukD_e7xyuAGk="
            alt="Professor 7"
          />
          <p>Prof. Shalini Verma</p>
          <p>Department of Environmental Science</p>
        </li>
        <li>
          <img
            src="https://media.istockphoto.com/id/1168175766/photo/portrait-of-an-indian-man-in-a-diverse-team-of-creative-millennial-coworkers-in-a-startup.jpg?s=612x612&w=0&k=20&c=3WkAMECbELOCwAgrf3sXjyQ-s68et79d7mg9TIxa5x0="
            alt="Professor 8"
          />
          <p>Dr. Aman Kapoor</p>
          <p>Department of Electronics</p>
        </li>
      </ul>
    </div>
  );
}

export default AcademicStaff;
