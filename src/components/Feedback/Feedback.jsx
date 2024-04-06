import css from "./Feedback.module.css";

export default function Feedback({
  feedbacks,
  totalFeedbacks,
  positivePercentage,
}) {
  return (
    <div className="section">
      <ul className={css.list}>
        <li className={css.listItem}>
          <p className={css.text}>Good: <span className={css.good}>{feedbacks.good}</span></p>
        </li>
        <li className={css.listItem}>
          <p className={css.text}>Neutral: <span className={css.neutral}>{feedbacks.neutral}</span></p>
        </li>
        <li className={css.listItem}>
          <p className={css.text}>Bad: <span className={css.bad}>{feedbacks.bad}</span></p>
        </li>
        <li className={css.listItem}>
          <p className={css.text}>Total: <span className={css.total}>{totalFeedbacks}</span></p>
        </li>
        <li className={css.listItem}>
          <p className={css.text}>Positive: <span className={css.positive}>{positivePercentage}%</span></p>
        </li>
      </ul>
    </div>
  );
}
