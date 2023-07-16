"use-client";
import type { FC } from "react";
import styles from "../styles/singleGroupComponent.module.css";
import type { Group, Student } from "../../types.ts";
import { Droppable } from "@hello-pangea/dnd";
import Image from "next/image";
interface SingleGroupComponentProps {
  group: Group;
}

const SingleGroupComponent: FC<SingleGroupComponentProps> = ({ group }) => {
  // console.log("GROUP!!!", group);

  const style = {
    background: group.color,
  };

  return (
    <Droppable droppableId={`droppable-${group.id}`}>
      {(provided, snapshot) => (
        <div
          className={styles.groupBox}
          style={style}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2>{group.name}</h2>
          <ul role="listitem">
            {provided.placeholder}
            {group?.members?.map((member: Student, i) => (
              <li key={member.id} className={styles.listItem}>
                <div className={styles.listItemContent}>
                  <Image
                    width={50}
                    height={50}
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
      )}
    </Droppable>
  );
};
export default SingleGroupComponent;
