import type { NextPage } from "next";
import styles from "./component.module.css";

export type ComponentType = {
  className?: string;
  note: string;
  deleteNote: (note: string) => void;
};

const Component: NextPage<ComponentType> = ({ className = "", note, deleteNote }) => {
  return (
    <button
      className={[styles.deleteNoteButton, className].join(" ")}
      onClick={() => deleteNote(note)}
    >
      <div className={styles.deleteNoteButtonChild} />
      <div className={styles.deleteNote}>Delete</div>
    </button>
  );
};

export default Component;
