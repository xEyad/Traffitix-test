import { FunctionComponent } from "react";
import styles from "./ComingSoon.module.scss";
interface ComingSoonProps {}

const ComingSoon: FunctionComponent<ComingSoonProps> = () => {
  return (
    <div className={styles.comingSoon}>
      <h1>Coming Soon</h1>
      <h3>I'm working hard to avoid making this page :)</h3>
    </div>
  );
};

export default ComingSoon;
