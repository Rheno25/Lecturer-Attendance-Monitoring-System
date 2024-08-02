//api/updateNotesAPI.js

import { updateLecturerNote } from "../../lib/fetchLecturerSpecific";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, notes } = req.body;

    if (!username || !notes) {
    }

    try {
      // Update lecturer details
      await updateLecturerNote(username, notes);

      return res.status(200).json({ message: 'Lecturer notes updated successfully' });
    } catch (error) {
      console.error('Error updating lecturer notes:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}