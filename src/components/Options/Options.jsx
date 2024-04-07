import css from "./Options.module.css";

export default function Options({ updateFeedback, totalFeedbacks, resetFeedbacks }) {
  return (
    <div className="section">
      <ul className={css.list}>
        <li className={css.listItem}>
          <button className={css.btn} onClick={() => updateFeedback("good")}>
            Good
          </button>
        </li>
        <li className={css.listItem}>
          <button className={css.btn} onClick={() => updateFeedback("neutral")}>
            Neutral
          </button>
        </li>
        <li className={css.listItem}>
          <button className={css.btn} onClick={() => updateFeedback("bad")}>
            Bad
          </button>
        </li>

        {totalFeedbacks > 0 && (
          <li className={css.listItem}>
            <button className={css.btn} onClick={() => resetFeedbacks()}>
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
