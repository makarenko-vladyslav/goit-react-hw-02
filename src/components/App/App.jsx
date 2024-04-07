import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedObject = window.localStorage.getItem("feedbacks");

    return savedObject ? JSON.parse(savedObject) : resetFeedbacks();
  });

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  function updateFeedback(feedbackType) {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1,
    }));
  }

  function resetFeedbacks() {
    setFeedbacks(() => ({
      good: 0,
      neutral: 0,
      bad: 0,
    }));
  }

  const totalFeedbacks = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positivePercentage =
    totalFeedbacks && Math.round((feedbacks.good / totalFeedbacks) * 100);

  return (
    <>
      <Description></Description>
      <Options
        updateFeedback={updateFeedback}
        resetFeedbacks={resetFeedbacks}
        totalFeedbacks={totalFeedbacks}
      ></Options>

      {totalFeedbacks === 0 ? (
        <Notification></Notification>
      ) : (
        <Feedback
          feedbacks={feedbacks}
          totalFeedbacks={totalFeedbacks}
          positivePercentage={positivePercentage}
        ></Feedback>
      )}
    </>
  );
}
