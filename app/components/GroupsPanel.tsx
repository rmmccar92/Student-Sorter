import styles from "../styles/groupsPanel.module.css";
import SingleGroupComponent from "./SingleGroupComponent";
import { useCallback } from "react";
import type { Group } from "../../types.ts";

interface PanelProps {
  toggle: boolean;
  setToggle: (toggle: any) => void;
  groups: Group[] | [];
  setGroups: (groups: Group[]) => void;
  // dragEndHandler: (result: any) => void;
}

const GroupsPanel = ({
  toggle,
  setToggle,
  groups,
  setGroups,
}: // dragEndHandler,
PanelProps) => {
  const onDrop = useCallback((acceptedFiles: unknown): void => {
    console.log("Dropped");
  }, []);
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
    console.log("Add Group");
    const bgColor = generateGradient();
    setGroups([
      ...groups,
      {
        name: `Group ${groups.length + 1}`,
        id: groups.length + 1,
        members: [],
        color: bgColor,
      },
    ]);
    localStorage.setItem(
      "groups",
      JSON.stringify([
        ...groups,
        {
          name: `Group ${groups.length + 1}`,
          id: groups.length + 1,
          members: [],
        },
      ])
    );
  };

  return (
    <div className={styles.groupsPanel}>
      <h1>Groups</h1>
      <div className={styles.groupsList}>
        <div className={styles.group}>
          {groups[0]?.name &&
            groups.map((group: Group, i) => (
              <SingleGroupComponent
                key={i}
                group={group}
                // dragEndHandler={dragEndHandler}
              />
            ))}
          <button className={styles.addGroupButton} onClick={handleAdd}>
            <h2>Add Group</h2>
          </button>
        </div>
      </div>
      <div className={styles.close} onClick={(prev) => setToggle(!prev)}>
        X
      </div>
    </div>
  );
};
export default GroupsPanel;
