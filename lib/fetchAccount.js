// lib/fetchAccount.js
const bigquery = require('./bigquery');

async function fetchAccount(username) {
  const query = `SELECT username, password, role FROM lecturer-attending.scannmap.account WHERE username = @username LIMIT 1`;
  const options = {
    query: query,
    params: { username: username },
    location: 'US',
  };

  const [rows] = await bigquery.query(options);
  return rows;
}

module.exports = fetchAccount;