import styles from "../styles/groupsPanel.module.css";
import SingleGroupComponent from "./SingleGroupComponent";
import { useCallback } from "react";
import type { Group } from "../../types.ts";

interface PanelProps {
  toggle: boolean;
  setToggle: (toggle: any) => void;
  groups: Group[] | [];
  handleAdd: () => void;
  // setGroups: (groups: Group[]) => void;
  // dragEndHandler: (result: any) => void;
}

const GroupsPanel = ({
  toggle,
  setToggle,
  groups,
  handleAdd,
}: // setGroups,
// dragEndHandler,
PanelProps) => {
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
          <button className={styles.addGroupButton} onClick={() => handleAdd()}>
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
