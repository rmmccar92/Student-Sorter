import data from "../../data/people.json";
import Link from "next/link";

const StudentsPage = () => {
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error</div>;
  const students = data.filter(
    (person) => person.enrollments[0].type === "StudentEnrollment"
  );
  return (
    <div>
      {students?.map((student) => (
        <Link href={`/students/${student.id}`} key={student.id}>
          <div>{student.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default StudentsPage;
