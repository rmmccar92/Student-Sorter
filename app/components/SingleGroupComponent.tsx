import type { FC } from "react";
import styles from "../styles/singleGroupComponent.module.css";
import { Droppable } from "react-beautiful-dnd";
interface SingleGroupComponentProps {
  groupName: string;
}

const SingleGroupComponent: FC<SingleGroupComponentProps> = ({ groupName }) => {
  return (
    <div className={styles.groupBox}>
      <h2>{groupName}</h2>
      <Droppable droppableId={groupName}>
        {(provided) => <ul className={groupName}></ul>}
      </Droppable>
    </div>
  );
};
export default SingleGroupComponent;
