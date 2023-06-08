import type { ReactNode } from "react";
import { Portal } from "./Portal";
import styles from "../styles/modal.module.css";

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  type?: string;
  ariaLabel?: string;
  className?: string;
}
const StudentModal = ({
  children,
  isOpen,
  setIsOpen,
  type,
  ariaLabel,
  className,
}: Props) => {
  return (
    <Portal wrapperId="modal-wrapper">
      <div
        className={styles.modalOverlay}
        aria-labelledby={ariaLabel ?? "modal-title"}
        role="dialog"
        aria-modal="true"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className={styles.modalContainer}>
        <div className={`${className} modal-content`}>{children}</div>
      </div>
    </Portal>
  );
};
export default StudentModal;
