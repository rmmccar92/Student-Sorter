"use-client";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import type { FC } from "react";
import styles from "../styles/singleGroupComponent.module.css";
import type { Group, Student } from "../../types.ts";
import DropZone from "react-dropzone";

interface SingleGroupComponentProps {
  group: Group;
  getInputProps: any;
  // dragEndHandler: (result: any) => void;
}

const SingleGroupComponent: FC<SingleGroupComponentProps> = ({
  group,
  getInputProps,
  // dragEndHandler,
}) => {
  // console.log("GROUP!!!", group);

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Hi!");
  };
  const handleDragLeave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Bye!");
  };
  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className={styles.groupBox}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrag={handleDrop}
    >
      {/* <input {...getInputProps} className={styles.groupInput} /> */}
      <h2>{group.name}</h2>
      <ul role="listitem">
        {group?.members?.map((member: Student, i) => (
          <li key={member.id} className={styles.listItem}>
            <div className={styles.listItemContent}>
              <img
                src={member.avatar_url}
                alt={member.name}
                className={styles.avatar}
              />
              <p>{member.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SingleGroupComponent;
