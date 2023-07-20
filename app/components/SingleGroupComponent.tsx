"use-client";
import type { FC } from "react";
import styles from "../styles/singleGroupComponent.module.css";
import type { Group, Student } from "../../types.ts";
import { Droppable } from "@hello-pangea/dnd";
import Image from "next/image";
import { useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";
interface SingleGroupComponentProps {
  group: Group;
  removeStudent: (student: Student) => void;
  removeGroup: (id: number) => void;
}

const SingleGroupComponent: FC<SingleGroupComponentProps> = ({
  group,
  removeStudent,
  removeGroup,
}) => {
  const animation = useTransition(group, {
    config: { duration: 250 },
    from: { y: -10, opacity: 0 },
    enter: { y: 10, opacity: 1, background: group.color },
    // leave: { x: -100, opacity: 0 },
  });
  return (
    <Droppable droppableId={`droppable-${group.id}`}>
      {(provided, snapshot) => (
        <>
          {animation((style, item) =>
            item ? (
              <animated.div
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
                        <button
                          className={styles.removeButton}
                          onClick={() => removeStudent(member)}
                        >
                          X
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  className={styles.groupRemoveButton}
                  onClick={() => removeGroup(group.id)}
                >
                  X
                </button>
              </animated.div>
            ) : (
              <></>
            )
          )}
        </>
      )}
    </Droppable>
  );
};
export default SingleGroupComponent;
