import fetchLecturer from '../../lib/fetchLecturer';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const lecturers = await fetchLecturer();
      console.log('Retrieved data:', lecturers); // Logging the retrieved data
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
