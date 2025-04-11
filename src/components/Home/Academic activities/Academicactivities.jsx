import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./AcademicActivities.module.css";
import PageNotFound from "../../404 error page/404Page";

function AcademicActivities() {
  const { activity } = useParams();
  const navigate = useNavigate();

  const activitiesContent = {
    "research-symposium": {
      title: "Research Symposium",
      description:
        "The Research Symposium is an annual event where students and faculty present their research findings. It provides a platform for intellectual discussions and knowledge sharing.",
      date: "Date: November 15, 2024",
      time: "Time: 9:00 AM",
      mode: "Mode: Offline (Campus Auditorium)",
      image:
        "https://media.istockphoto.com/id/1458682606/photo/students-is-working-with-robot-arm-project.jpg?s=612x612&w=0&k=20&c=Z6zLjEawQkwBKvGGx7A9HO5SbpKpUCuQKDsSQSplZXM=",
    },
    "entrepreneurship-workshop": {
      title: "Entrepreneurship Workshop",
      description:
        "The Entrepreneurship Workshop is a hands-on program aimed at nurturing students’ entrepreneurial skills. Participants will learn about business ideation, planning, and startup fundamentals.",
      date: "Date: December 5, 2024",
      time: "Time: 10:00 AM",
      mode: "Mode: Offline (Business School Building)",
      image:
        "https://media.istockphoto.com/id/1093925980/photo/successful-happy-group-of-people-learning-software-engineering-and-business-during.jpg?s=612x612&w=0&k=20&c=ic9E7uoMB1FxkpS135aQGcPsvfzlqtWamJuu5DBYNNs=",
    },
    // ... rest of the activities (same as before)

    "drawing-competition": {
      title: "Drawing Competition",
      description: 'Join our exciting Drawing Competition and showcase your artistic talent. Theme: "Nature\'s Beauty". Prizes to be won!',
      date: "Date: Jan 1, 2025",
      time: "Time: 9:00 AM",
      mode: "Mode: Online",
      image: "https://media.istockphoto.com/id/844357070/photo/back-to-school-concept.jpg?s=612x612&w=0&k=20&c=N91gKNVv8ljPNcpx3Aha2m8yct_b8QHdBnuBdqP-ZLY=",
      customActivationDateTime: new Date("2025-01-01T09:00:00"),
      customEndDateTime: new Date("2025-02-01T09:00:00"),
    },

    // Add other task-based events here as required
  };

  const selectedActivity = activitiesContent[activity];
  if (!selectedActivity) return <PageNotFound />;

  const {
    title,
    description,
    date,
    time,
    mode,
    image,
    customActivationDateTime,
    customEndDateTime,
  } = selectedActivity;

  const taskEnabledTitles = [
    "Drawing Competition",
    "Coding Challenge",
    "Poetry Contest",
    "Acting Show",
    "Best Introduction",
  ];

  const now = new Date();
  const hasDateRange = customActivationDateTime && customEndDateTime;
  const isTaskLive =
    hasDateRange && now >= customActivationDateTime && now <= customEndDateTime;

  const handleTaskClick = () => {
    navigate(
      `/academic-activity/${activity}/task?start=${customActivationDateTime.toISOString()}&end=${customEndDateTime.toISOString()}`
    );
  };

  return (
    <div className={styles.activityContainer}>
      <div className={styles.activityImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.activityDetails}>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p>{date}</p>
        <p>{time}</p>
        <p>{mode}</p>

        {taskEnabledTitles.includes(title) && (
          <>
            <button
              onClick={handleTaskClick}
              className={isTaskLive ? styles.activeTask : styles.inactiveTask}
              disabled={!isTaskLive}
            >
              {isTaskLive ? "View Task" : "Task Not Available"}
            </button>

            {hasDateRange && !isTaskLive && (
              <div
                className={styles.taskMessageDiv}
                style={{
                  color: now > customEndDateTime ? "red" : "orange",
                }}
              >
                {now < customActivationDateTime && (
                  <>Task will be available from <strong>{customActivationDateTime.toLocaleString()}</strong>.</>
                )}
                {now > customEndDateTime && (
                  <>This task ended on <strong>{customEndDateTime.toLocaleString()}</strong>.</>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default AcademicActivities;
