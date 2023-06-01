import data from "../../data/people.json";
import Link from "next/link";
import styles from "../styles/studentlist.module.css";
import Image from "next/image";

const StudentsPage = () => {
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error</div>;
  const students = data.filter(
    (person) => person.enrollments[0].type === "StudentEnrollment"
  );
  return (
    <div className={styles.studentPage}>
      <h1>Students</h1>
      <div className={styles.studentList}>
        {students?.map((student) => (
          <Link
            href={`/students/${student.id}`}
            key={student.id}
            className={styles.listItem}
          >
            <div className={styles.buttonInfo}>
              {student.avatar_url ? (
                <Image
                  className={styles.avatar}
                  src={student.avatar_url}
                  alt="Student Avatar"
                  width={30}
                  height={30}
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
              {student.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
