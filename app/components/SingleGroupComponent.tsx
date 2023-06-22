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
      <Droppable droppableId={"2"}>
        {(provided, snapShot) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            role="listitem"
          >
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};
export default SingleGroupComponent;
