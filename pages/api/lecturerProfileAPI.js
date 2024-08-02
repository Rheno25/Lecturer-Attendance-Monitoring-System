import { fetchLecturerSpecific } from '../../lib/fetchLecturerSpecific';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { username } = req.query; // Extract username from query parameters

    try {
      const lecturers = await fetchLecturerSpecific(username); // Pass username directly (as a string)

      if (lecturers.length === 0) {
        return res.status(404).json({ error: 'No lecturer found for the provided username' });
      }

      res.status(200).json(lecturers);
    } catch (error) {
      console.error('Error fetching lecturer data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}