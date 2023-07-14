import type { FC } from "react";
import type { Student } from "../../types.ts";
import styles from "../styles/studentlist.module.css";
import Image from "next/image";
import { Draggable } from "@hello-pangea/dnd";

interface StudentCardProps {
  student: Student;
  i: number;
}

const StudentCard: FC<StudentCardProps> = ({ student, i }) => {
  return (
    <Draggable draggableId={`${student.id}`} index={i}>
      {(provided, snapShot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
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
        </li>
      )}
    </Draggable>
  );
};
export default StudentCard;
