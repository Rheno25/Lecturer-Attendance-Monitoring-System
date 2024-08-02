// components/atoms/component3.tsx

import React, { useState } from 'react';
import axios from 'axios';
import styles from './component1.module.css';

export interface Component1Type {
  addNote: (note: string) => void;
  className?: string;
  username: string; // Add username to the Component1Type
}

const Component1: React.FC<Component1Type> = ({ className = '', addNote, username }) => {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    if (text.trim()) {
      try {
        // Send the note to your API endpoint with username
        await axios.post('/api/updateNotesAPI', { username, notes: text });

        // Call addNote function with text as parameter
        addNote(text);

        // Clear input after adding note
        setText('');
      } catch (error) {
        console.error('Error adding note:', error);
        // Handle error (e.g., show error message to user)
      }
    }
  };

  return (
    <div className={[styles.addNoteButton, className].join(' ')}>
      <div className={styles.addNoteButtonChild} />
      <div className={styles.addANoteWrapper}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.addANote}
          placeholder="Add a note"
        />
      </div>
      <button className={styles.doneButton} onClick={handleSubmit}>
        <img className={styles.doneIcon} alt="" src="/done@2x.png" />
      </button>
    </div>
  );
};

export default Component1;