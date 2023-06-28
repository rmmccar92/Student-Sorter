"use client";
import { useState, useEffect } from "react";
import data from "../../data/people.json";
import styles from "../styles/studentlist.module.css";
import Image from "next/image";
import GroupsComponent from "../components/Groups";
import StudentModal from "../components/StudentModal";
import GroupsPanel from "../components/GroupsPanel.tsx";
import type { Student, Group } from "../../types.ts";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const StudentsPage = () => {
  let value: any = [];
  // Get the value from local storage if it exists

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [toggleGroupPanel, setToggleGroupPanel] = useState<boolean>(false);

  const [groups, setGroups] = useState<Group[] | []>([]);
  useEffect(() => {
    if ("groups" in localStorage) {
      value = JSON.parse(localStorage.getItem("groups") as string);
      // console.log(value);
    } else {
      value = [];
    }
    setGroups(value);
  }, []);

  const students = data.filter(
    (person) => person.enrollments[0].type === "StudentEnrollment"
  );

  const dragEndHandler = (result: any) => {
    console.log("RESULT", result);
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
      console.log("DESTINATION", destination);
      addGroupMember(destination.droppableId, draggableId);
    }
  };

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
        const updatedMembers = [...groups, group.members.push(foundStudent)];
        console.log("UPDATED MEMBERS", updatedMembers);
        setGroups((prev) => {
          return [updatedMembers];
        });
        localStorage.setItem("groups", JSON.stringify([updatedMembers]));
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
      <DragDropContext onDragEnd={dragEndHandler}>
        <div className={styles.studentPage}>
          <Droppable droppableId={"1"}>
            {(provided, snapShot) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                role="listitem"
                className={
                  toggleGroupPanel ? styles.panelOpen : styles.studentList
                }
              >
                {provided.placeholder}
                {students?.map((student, i) => (
                  <Draggable
                    draggableId={student.id.toString()}
                    key={student.id}
                    index={i}
                  >
                    {(provided, snapShot) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={styles.listItem}
                        ref={provided.innerRef}
                        // @ts-ignore
                        // isDragging={snapShot.isDragging}
                        onClick={() => openModal(student.id)}
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
                          <div className={styles.buttonContent}>
                            {student.name}
                          </div>
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
            setGroups={setGroups}
            // dragEndHandler={dragEndHandler}
          />
        )}
      </DragDropContext>
    </>
  );
};

export default StudentsPage;
