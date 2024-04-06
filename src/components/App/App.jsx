import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedObject = window.localStorage.getItem("feedbacks");

    return savedObject !== null
      ? JSON.parse(savedObject)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    feedbackType !== 0
      ? setFeedbacks((prevFeedbacks) => ({
          ...prevFeedbacks,
          [feedbackType]: prevFeedbacks[feedbackType] + 1,
        }))
      : setFeedbacks(() => ({
          good: 0,
          neutral: 0,
          bad: 0,
        }));
  };

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedbacks = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positivePercentage = Math.round(
    ((feedbacks.good + feedbacks.neutral) / totalFeedbacks) * 100
  );

  return (
    <>
      <Description></Description>
      <Options
        updateFeedback={updateFeedback}
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
