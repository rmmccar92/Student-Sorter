import data from "../../data/people.json";
import Link from "next/link";
import styles from "../styles/studentlist.module.css";

const StudentsPage = () => {
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error</div>;
  const students = data.filter(
    (person) => person.enrollments[0].type === "StudentEnrollment"
  );
  return (
    <div>
      <div className={styles.studentList}>
        {students?.map((student) => (
          <Link
            href={`/students/${student.id}`}
            key={student.id}
            className={styles.listItem}
          >
            <div>{student.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
