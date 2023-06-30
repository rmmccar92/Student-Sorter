import type { FC } from "react";
import type { Student } from "../../types.ts";
import styles from "../styles/studentlist.module.css";
import Image from "next/image";
import { useSpring, animated, to } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

interface StudentCardProps {
  student: Student;
}

// const animationFn =
//   (
//     order: number[],
//     active: boolean = false,
//     originalIndex: number = 0,
//     curIndex: number = 0,
//     y: number = 0,
//     x: number = 0
//   ) =>
//   // DOUBLE ARROW FUNCTION :O
//   (index: number) =>
//     active && index === originalIndex
//       ? {
//           y: curIndex * 100 + y,
//           x: curIndex * 100 + x,
//           scale: 1.1,
//           zIndex: "1",
//           shadow: 15,
//           // determines which properties are animated immediately
//           immediate: (key: string) =>
//             key === "y" || key === "zIndex" || key === "x",
//         }
//       : {
//           y: order.indexOf(index) * 50,
//           x: order.indexOf(index) * 50,
//           scale: 1,
//           zIndex: 0,
//           shadow: 1,
//           immediate: false,
//         };

const StudentCard: FC<StudentCardProps> = ({ student }) => {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ x: down ? mx : 0, y: down ? my : 0 });
  });

  return (
    <>
      <animated.li
        {...bind()}
        style={{
          transform: to(
            [x, y],
            (xValue, yValue) => `translate3d(${xValue}px, ${yValue}px, 0)`
          ),
        }}
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
    </>
  );
};
export default StudentCard;
