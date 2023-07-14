// "use client";

// // import { useEffect, useState } from "react";
// import data from "../../../data/people.json";
// import { Student } from "../../../types.ts";
// interface PageProps {
//   params: {
//     id: string;
//   };
//   searchParams: URLSearchParams;
// }

// export default function Page({ params, searchParams }: PageProps) {
//   const parsedID = parseInt(params.id);
//   const student: any = data.find(({ id }) => id === parsedID);
//   const nameArr = student?.name.split(" ");
//   const firstName = nameArr[1];
//   const lastName = nameArr[0].slice(0, -1);
//   const fullName = firstName + " " + lastName;
//   return <div>Hi! {fullName}</div>;
// }

export async function StudnetID() {
  return <div>Hi!</div>;
}
