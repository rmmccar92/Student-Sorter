import styles from "../styles/groupsPanel.module.css";

interface PanelProps {
  toggle: boolean;
  setToggle: (toggle: any) => void;
}

const GroupsPanel = ({ toggle, setToggle }: PanelProps) => {
  return (
    <div className={styles.groupsPanel}>
      <h1>Groups</h1>
      <div className={styles.groupsList}>
        <div className={styles.group}>
          <h2>Group 1</h2>
          <h2>Group 2</h2>
          <h2>Group 3</h2>
          <h2>Group 4</h2>
          <h2>Group 5</h2>
        </div>
      </div>
      <div className={styles.close} onClick={(prev) => setToggle(!prev)}>
        X
      </div>
    </div>
  );
};
export default GroupsPanel;
