import styles from "../styles/groupsPanel.module.css";
import { useState } from "react";
import SingleGroupComponent from "./SingleGroupComponent";
import { Droppable } from "react-beautiful-dnd";

interface PanelProps {
  toggle: boolean;
  setToggle: (toggle: any) => void;
}

const GroupsPanel = ({ toggle, setToggle }: PanelProps) => {
  const [groups, setGroups] = useState<string[]>([]);

  const handleAdd = () => {
    console.log("Add Group");
    setGroups([...groups, `Group ${groups.length + 1}`]);
  };

  return (
    <div className={styles.groupsPanel}>
      <h1>Groups</h1>
      <div className={styles.groupsList}>
        <div className={styles.group}>
          {groups.length > 0 &&
            groups.map((group) => {
              return <SingleGroupComponent groupName={group} />;
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
