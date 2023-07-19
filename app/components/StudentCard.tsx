import type { FC } from "react";
import type { Student } from "../../types.ts";
import styles from "../styles/studentlist.module.css";
import Image from "next/image";
import { Draggable } from "@hello-pangea/dnd";
import { animated } from "@react-spring/web";

interface StudentCardProps {
  student: Student;
  i: number;
  toggle: boolean;
  trailProps: any;
}

const StudentCard: FC<StudentCardProps> = ({
  student,
  i,
  toggle,
  trailProps,
}) => {
  return (
    <Draggable draggableId={`${student.id}`} index={i}>
      {(provided, snapShot) => {
        const otherProps = {
          ...provided.draggableProps,
          style: {
            ...provided.draggableProps.style,
            ...trailProps,
          },
        };
        return (
          <animated.li
            ref={provided.innerRef}
            {...otherProps}
            {...provided.dragHandleProps}
            className={styles.listItem}
            // onClick={() => openModal(student.id)}
          >
            <div className={styles.buttonInfo}>
              {student.avatar_url ? (
                <Image
                  className={styles.avatar}
                  src={student.avatar_url}
                  alt="Student Avatar"
                  width={40}
                  height={40}
                  // priority
                />
              ) : (
                <Image
                  className={styles.avatar}
                  src="/vercel.svg"
                  alt="Student Avatar"
                  width={50}
                  height={50}
                  // priority
                />
              )}
              <div className={styles.buttonContent}>{student.name}</div>
              <div className={styles.buttonLogo}>
                <Image
                  src="/unc.png"
                  alt="UNC Logo"
                  width={75}
                  height={75}
                  // priority
                />
              </div>
            </div>
          </animated.li>
        );
      }}
    </Draggable>
  );
};
export default StudentCard;
