import type { FC } from "react";
import styles from "../styles/singleGroupComponent.module.css";

interface SingleGroupComponentProps {
  groupName: string;
}

const SingleGroupComponent: FC<SingleGroupComponentProps> = ({ groupName }) => {
  return (
    <div className={styles.groupBox}>
      <h2>{groupName}</h2>
    </div>
  );
};
export default SingleGroupComponent;
