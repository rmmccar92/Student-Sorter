import data from "../../../data/people.json";

interface PageProps {
  params: {
    id: number;
  };
  searchParams: URLSearchParams;
}

export default function Page({ params, searchParams }: PageProps) {
  const student = data.find((person) => params.id === params.id);
  if (!student) {
    return <div>Student not found</div>;
  }
  const nameArr = student.name.split(" ");
  const firstName = nameArr[1];
  const lastName = nameArr[0].slice(0, -1);
  const fullName = firstName + " " + lastName;
  return <div>Hi! {fullName}</div>;
}
