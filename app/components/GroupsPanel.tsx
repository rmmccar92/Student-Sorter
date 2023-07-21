import styles from "../styles/groupsPanel.module.css";
import SingleGroupComponent from "./SingleGroupComponent";
import type { Group, Student } from "../../types.ts";
import { useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { FcCollapse } from "react-icons/fc";

interface PanelProps {
  toggle: boolean;
  setToggle: (toggle: any) => void;
  groups: Group[] | [];
  handleAdd: () => void;
  removeStudent: (student: Student) => void;
  removeGroup: (id: number) => void;
}

const GroupsPanel = ({
  toggle,
  setToggle,
  groups,
  handleAdd,
  removeStudent,
  removeGroup,
}: PanelProps) => {
  const animation = useTransition(toggle, {
    config: { duration: 125 },
    from: { x: 100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 100, opacity: 0 },
  });

  return (
    <>
      {animation((style, item) =>
        item ? (
          <animated.div className={styles.groupsPanel} style={style}>
            <div className={styles.groupsList}>
              <div className={styles.groupListMain}>
                <h1>Groups</h1>
                <div className={styles.group}>
                  {groups[0]?.name &&
                    groups.map((group: Group, i) => (
                      <SingleGroupComponent
                        key={i}
                        group={group}
                        removeStudent={removeStudent}
                        removeGroup={removeGroup}
                      />
                    ))}
                  <div className={styles.buttonContainer}>
                    <button
                      className={styles.addGroupButton}
                      onClick={() => handleAdd()}
                    >
                      <h2>Add Group</h2>
                    </button>
                  </div>
                </div>
              </div>
              <button
                className={styles.close}
                onClick={(prev) => setToggle(!prev)}
              >
                <FcCollapse size={40} />
              </button>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
};
export default GroupsPanel;
