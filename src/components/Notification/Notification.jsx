import css from "./Notification.module.css";
import { VscFeedback } from "react-icons/vsc";

export default function Notification() {
  return (
    <p className={css.text}>
      <VscFeedback /> No feedbacks yet...
    </p>
  );
}
