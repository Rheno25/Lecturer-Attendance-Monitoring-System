import fetchAccount from '../../lib/fetchAccount';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { username, password } = req.body;

  try {
    const users = await fetchAccount(username); // Fetch data for the specific username

    if (users.length > 0) {
      const user = users[0];
      if (user.password === password) { // Validate credentials
        res.status(200).json({ message: 'Login successful', role: user.role });
      } else {
        res.status(401).json({ error: 'Invalid username or password' });
      }
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
