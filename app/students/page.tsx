"use client";
import { useState, useEffect, useRef } from "react";
import data from "../../data/people.json";
import styles from "../styles/studentlist.module.css";
import Image from "next/image";
import GroupsComponent from "../components/Groups";
import StudentModal from "../components/StudentModal";
import GroupsPanel from "../components/GroupsPanel.tsx";
import StudentCard from "../components/StudentCard.tsx";
import type { Student, Group } from "../../types.ts";
import { useSprings, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

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

const StudentsPage = () => {
  let value: any = [];

  // State variables
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [toggleGroupPanel, setToggleGroupPanel] = useState<boolean>(false);
  const [groups, setGroups] = useState<Group[] | []>([]);
  // animation coordinates

  // Get values from local storage if they exist
  useEffect(() => {
    // console.log("Springs", springs);

    if ("groups" in localStorage) {
      value = JSON.parse(localStorage.getItem("groups") as string);
      // console.log(value);
    } else {
      value = [];
    }
    setGroups(value);
  }, []);
  // Remove instructors from the list
  const students = data.filter(
    (person) => person.enrollments[0].type === "StudentEnrollment"
  );

  // const order = useRef(students.map((_, index) => index));
  // const [springs, api] = useSprings(
  //   students.length,
  //   animationFn(order.current)
  // );

  // const swap = (arr: number[], index1: number, index2: number): number[] => {
  //   return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
  // };

  // const clamp = (number: number, min: number, max: number) =>
  //   Math.max(min, Math.min(number, max));

  // const bind = useDrag(
  //   ({ args: [originalIndex], active, movement: [x, y] }) => {
  //     const curIndex = order.current.indexOf(originalIndex);
  //     const curRow = clamp(
  //       Math.round((curIndex * 100 + y) / 100),
  //       0,
  //       students.length - 1
  //     );
  //     const newOrder = swap(order.current, curIndex, curRow);
  //     api.start(animationFn(newOrder, active, originalIndex, curIndex, y, x));
  //     // Feed springs new style data, they'll animate the view without causing a single render
  //     if (!active) order.current = newOrder;
  //   }
  // );
  const addGroupMember = (groupId: string, studentId: string) => {
    groups.forEach((group) => {
      const realGroupId = groupId.split("-")[0];
      // console.log(
      //   "GROUP ID",
      //   realGroupId,
      //   "Two:",
      //   group.id.toString(),
      //   studentId
      // );
      if (realGroupId === group.id.toString()) {
        const foundStudent: any = findStudent(parseInt(studentId));
        // const updatedMembers = [...groups, group.members.push(foundStudent)];
        const updatedMembers = group.members.push(foundStudent);
        console.log("UPDATED MEMBERS", updatedMembers);
        // setGroups(updatedMembers as any);
        localStorage.setItem(
          "groups",
          JSON.stringify([...groups, updatedMembers])
        );
      }
    });
  };

  const findStudent = (id: number) => {
    console.log("ID", id);
    const student = data.find((student) => student.id === id);
    console.log(`${student?.name}`, student);
    return student;
  };

  const openModal = (id: number) => {
    const student: any = findStudent(id);
    setSelectedStudent(student);
    setIsOpen(true);
  };

  const formatName = (studentName: string) => {
    const nameArr = studentName.split(" ");
    const firstName = nameArr[1];
    const lastName = nameArr[0].slice(0, -1);
    const fullName = firstName + " " + lastName;
    return fullName;
  };
  return (
    <>
      {isOpen && (
        <>
          <StudentModal
            ariaLabel="student-modal"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <div className={styles.modalInner}>
              <h1 className={styles.modalTitle}>
                {formatName(selectedStudent?.name as string)}
              </h1>
              {selectedStudent?.avatar_url ? (
                <Image
                  className={styles.modalAvatar}
                  src={selectedStudent.avatar_url}
                  alt="Student Avatar"
                  width={60}
                  height={60}
                  // priority
                />
              ) : (
                <Image
                  className={styles.modalAvatar}
                  src="/vercel.svg"
                  alt="Student Avatar"
                  width={50}
                  height={50}
                  // priority
                />
              )}
            </div>
          </StudentModal>
        </>
      )}
      <h1 className={styles.title}>Students</h1>
      <div className={styles.studentPage}>
        <ul
          className={toggleGroupPanel ? styles.panelOpen : styles.studentList}
        >
          {students?.map((student, i) => (
            <StudentCard key={i} student={student as Student} />
          ))}
        </ul>
      </div>
      <div className={styles.groupButton}>
        <GroupsComponent
          toggle={toggleGroupPanel}
          setToggle={setToggleGroupPanel}
        />
      </div>
      {toggleGroupPanel && (
        <GroupsPanel
          toggle={toggleGroupPanel}
          setToggle={setToggleGroupPanel}
          groups={groups}
          setGroups={setGroups}
          // dragEndHandler={dragEndHandler}
        />
      )}
    </>
  );
};

export default StudentsPage;
