interface GroupsProps {
  toggle: boolean;
  setToggle: (toggle: any) => void;
}

const GroupsComponent = ({ toggle, setToggle }: GroupsProps) => {
  return (
    <>
      {!toggle && (
        <button onClick={() => setToggle((prev: boolean) => !prev)}>
          <span>Groups</span>
        </button>
      )}
    </>
  );
};

export default GroupsComponent;
