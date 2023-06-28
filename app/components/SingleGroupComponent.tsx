import type { FC } from "react";
import styles from "../styles/singleGroupComponent.module.css";
import { Droppable } from "react-beautiful-dnd";
import type { Group } from "../../types.ts";
interface SingleGroupComponentProps {
  group: Group;
  // dragEndHandler: (result: any) => void;
}

const SingleGroupComponent: FC<SingleGroupComponentProps> = ({
  group,
  // dragEndHandler,
}) => {
  console.log("GROUP!!!", group);
  return (
    <div className={styles.groupBox}>
      <h2>{group.name}</h2>
      <Droppable droppableId={`${group?.id.toString()}-${group.name}`}>
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
