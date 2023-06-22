import styles from "../styles/groupsPanel.module.css";
import { useState } from "react";
import SingleGroupComponent from "./SingleGroupComponent";
import { Droppable } from "react-beautiful-dnd";
import type { Group } from "../../types.ts";

interface PanelProps {
  toggle: boolean;
  setToggle: (toggle: any) => void;
  groups: [Group] | [];
  setGroups: (groups: [Group]) => void;
}

const GroupsPanel = ({ toggle, setToggle, groups, setGroups }: PanelProps) => {
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
  };

  return (
    <div className={styles.groupsPanel}>
      <h1>Groups</h1>
      <div className={styles.groupsList}>
        <div className={styles.group}>
          {groups[0]?.name > 0 &&
            groups.map((group, i) => {
              return <SingleGroupComponent key={i} groupName={group?.name} />;
            })}
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
