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

  const handleAdd = () => {
    console.log("Add Group");
    setGroups([
      ...groups,
      {
        name: `Group ${groups.length + 1}`,
        id: groups.length + 1,
        members: [],
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
