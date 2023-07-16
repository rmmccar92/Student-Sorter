"use client";
import { useState, useEffect, useMemo, Suspense } from "react";
// import data from "../../data/people.json";
import styles from "../styles/studentlist.module.css";
import Image from "next/image";
import GroupsComponent from "../components/Groups";
import StudentModal from "../components/StudentModal";
import GroupsPanel from "../components/GroupsPanel.tsx";
import StudentCard from "../components/StudentCard.tsx";
import type { Student, Group } from "../../types.ts";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

const StudentsPage = () => {
  let value: any = [];

  // State variables
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [toggleGroupPanel, setToggleGroupPanel] = useState<boolean>(false);
  const [groups, setGroups] = useState<Group[] | []>([]);
  const [students, setStudents] = useState<Student[] | []>([]);
  const [list, setList] = useState<Student[] | []>([]);
  // Get values from local storage if they exist
  useEffect(() => {
    const getStudents = async () => {
      if ("students" in localStorage) {
        setStudents(JSON.parse(localStorage.getItem("students") as string));
        return;
      }
      const results = await fetch("/api/students");
      const list = await results.json();
      setList(list);
      // console.log("RESULTS", list);
      const updatedStudents = list
        .filter(
          (person: any) => person.enrollments[0].type === "StudentEnrollment"
        )
        .map((student: Student) => {
          return {
            ...student,
            group: null,
          };
        });

      setStudents(updatedStudents);
      localStorage.setItem("students", JSON.stringify(updatedStudents));
    };
    getStudents();

    if ("groups" in localStorage) {
      value = JSON.parse(localStorage.getItem("groups") as string);
      // console.log(value);
    } else {
      value = [];
    }
    setGroups(value);
  }, []);
  // Remove instructors from the list

  const addGroupMember = (groupId: string, studentId: string) => {
    // console.log("GROUP ID", groupId, "STUDENT ID", studentId);
    groups.forEach((group) => {
      const realGroupId = groupId.split("-")[1];
      // console.log(
      //   "GROUP ID",
      //   realGroupId,
      //   "Two:",
      //   group.id.toString(),
      //   studentId
      // );
      if (parseInt(realGroupId) === group.id) {
        const foundStudent: Student | undefined = findStudent(
          parseInt(studentId)
        );

        if (!foundStudent) return;
        if (foundStudent.group === group.id) {
          console.log("Student already in group");
          return;
        } else {
          foundStudent.group = group.id;
          // const index = group.id - 1;
          const tempArr: Student[] = [...group.members];
          tempArr.push(foundStudent);
          setGroups((prev: any) => {
            const updatedGroups = [...prev];
            const groupIndex = group.id - 1;
            console.log("GROUP INDEX", groupIndex);
            updatedGroups[groupIndex] = {
              ...updatedGroups[groupIndex],
              members: [...updatedGroups[groupIndex].members, foundStudent],
            };
            localStorage.setItem("groups", JSON.stringify(updatedGroups));
            return updatedGroups;
          });
          // const updatedMembers = group.members.push(foundStudent);
          // console.log("UPDATED MEMBERS", updatedMembers);
          removeFromList(parseInt(studentId));
        }
      }
    });
  };
  const removeFromList = (id: number) => {
    const tempList = [...students];
    const updatedList = tempList.filter((student: Student) => {
      return parseInt(student.id) !== id;
    });
    setStudents(updatedList);
    localStorage.setItem("students", JSON.stringify(updatedList));
    // console.log("UPDATED LIST", updatedList);
  };

  let randomColor = () => {
    let hexString = "0123456789abcdef";
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  };
  let generateGradient = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let angle = Math.floor(Math.random() * 360);
    const output = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
    console.log(output);
    return output;
  };

  const handleAdd = () => {
    // console.log("Add Group");
    const bgColor = generateGradient();
    setGroups((prev) => {
      return [
        ...prev,
        {
          name: `Group ${groups.length + 1}`,
          id: groups.length + 1,
          members: [],
          color: bgColor,
        },
      ];
    });
    localStorage.setItem(
      "groups",
      JSON.stringify([
        ...groups,
        {
          name: `Group ${groups.length + 1}`,
          id: groups.length + 1,
          members: [],
          color: bgColor,
        },
      ])
    );
  };

  const findStudent = (id: number) => {
    console.log("ID", id, "LIST", students, id);
    const found = students.find(
      (student: Student) => parseInt(student.id) === id
    );
    console.log("FOUND", found);
    return found;
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

  const handleDragStart = () => {
    console.log("Hi!");
  };
  const dragEndHandler = (result: any) => {
    // console.log("RESULT", result);
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    } else {
      // console.log("DESTINATION", destination);

      addGroupMember(destination.droppableId, draggableId);
    }
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
      <Suspense fallback={<div>Loading...</div>}>
        <DragDropContext
          onDragStart={handleDragStart}
          onDragEnd={dragEndHandler}
        >
          <div className={styles.studentPage}>
            <Droppable droppableId="1">
              {(provided, snapshot) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  role="list"
                  className={
                    toggleGroupPanel ? styles.panelOpen : styles.studentList
                  }
                >
                  {provided.placeholder}
                  {students?.map((student: Student, i) => (
                    <StudentCard key={i} i={i} student={student} />
                  ))}
                </ul>
              )}
            </Droppable>
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
              // setGroups={setGroups}
              handleAdd={handleAdd}
            />
          )}
        </DragDropContext>
      </Suspense>
    </>
  );
};

export default StudentsPage;
