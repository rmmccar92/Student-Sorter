"use-client";
import type { FC } from "react";
import styles from "../styles/singleGroupComponent.module.css";
import type { Group, Student } from "../../types.ts";
import { useDroppable } from "@dnd-kit/core";
interface SingleGroupComponentProps {
  group: Group;
  // dragEndHandler: (result: any) => void;
}

const SingleGroupComponent: FC<SingleGroupComponentProps> = ({
  group,
  // dragEndHandler,
}) => {
  // console.log("GROUP!!!", group);

  const { isOver, setNodeRef } = useDroppable({
    id: `droppable-${group.id}`,
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} className={styles.groupBox} style={style}>
      <h2>{group.name}</h2>
      <ul role="listitem">
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
    </div>
  );
};
export default SingleGroupComponent;
