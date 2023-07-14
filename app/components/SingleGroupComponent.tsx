"use-client";
import type { FC } from "react";
import styles from "../styles/singleGroupComponent.module.css";
import type { Group, Student } from "../../types.ts";
import { Droppable } from "@hello-pangea/dnd";
interface SingleGroupComponentProps {
  group: Group;
  // dragEndHandler: (result: any) => void;
}

const SingleGroupComponent: FC<SingleGroupComponentProps> = ({
  group,
  // dragEndHandler,
}) => {
  // console.log("GROUP!!!", group);

  const style = {
    background: group.color,
  };

  return (
    <div className={styles.groupBox} style={style}>
      <h2>{group.name}</h2>
      <Droppable droppableId={`droppable-${group.id}`}>
        {(provided, snapshot) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            role="listitem"
          >
            {provided.placeholder}
            {group?.members?.map((member: Student, i) => (
              <li key={member.id} className={styles.listItem}>
                <div className={styles.listItemContent}>
                  <img
                    src={member.avatar_url}
                    alt={member.name}
                    className={styles.avatar}
                  />
                  <p>{member.name}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Droppable>
    </div>
  );
};
export default SingleGroupComponent;
