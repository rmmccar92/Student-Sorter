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
    const getSudents = async () => {
      const results = await fetch("/getStudents");
      console.log("RESULTS", results);
    };
    getSudents();

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
    const student = data.find((student) => parseInt(student.id) === id);
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
          {students?.map((student: unknown, i) => (
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
