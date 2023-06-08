"use client";
import { useState } from "react";
import data from "../../data/people.json";
import Link from "next/link";
import styles from "../styles/studentlist.module.scss";
import Image from "next/image";
import GroupsComponent from "../components/Groups";
import StudentModal from "../components/StudentModal";
import type { Student } from "../../types.ts";

const StudentsPage = () => {
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error</div>;

  const [isOpen, setIsOpen] = useState(false);
  const [studentId, setStudentId] = useState(0);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const students = data.filter(
    (person) => person.enrollments[0].type === "StudentEnrollment"
  );

  const findStudent = (id: number) => {
    const student = data.find((student) => student.id === id);
    console.log(`${student?.name}`, student);
    return student;
  };

  const openModal = (id: number) => {
    const student: any = findStudent(id);
    setSelectedStudent(student);
    setIsOpen(true);
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
            <div className="modal-inner">
              <h1 className={styles.modalTitle}>{selectedStudent?.name}</h1>
            </div>
          </StudentModal>
        </>
      )}
      <h1 className={styles.title}>Students</h1>
      <div className={styles.studentPage}>
        <div className={styles.studentList}>
          {students?.map((student) => (
            <div
              // href={`/students/${student.id}`}
              key={student.id}
              className={styles.listItem}
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
                <div
                  className={styles.buttonContent}
                  onClick={() => openModal(student.id)}
                >
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
            </div>
          ))}
        </div>
        <div className={styles.groupButton}>
          <GroupsComponent />
        </div>
      </div>
    </>
  );
};

export default StudentsPage;
