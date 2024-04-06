import css from "./Description.module.css";

export default function Description() {
  return (
    <div className="section">
      <h1 className={css.title}>
        <span className={css.accentFirst}>Sip</span> Happens Café
      </h1>
      <p>
        Please leave your feedback
        <span className={css.accentSecond}> about </span>
        our service
        <span className={css.accentSecond}> by </span>
        selecting one
        <span className={css.accentSecond}> of the </span>
        options
        <span className={css.accentSecond}> below</span>.
      </p>
    </div>
  );
}
