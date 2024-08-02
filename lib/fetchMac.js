// lib/fetchMac.js

const { BigQuery } = require('@google-cloud/bigquery');

const bigquery = new BigQuery();

async function fetchMac(startDate, endDate) {
  // Ensure dates are in ISO 8601 format
  const formattedStartDate = new Date(startDate).toISOString().split('T')[0];
  const formattedEndDate = new Date(endDate).toISOString().split('T')[0];

  const query = `
    SELECT mac, name, nip, scanTime, timestamp 
    FROM \`lecturer-attending.scannmap.report\`
    WHERE DATE(timestamp) BETWEEN @startDate AND @endDate
    ORDER BY timestamp
  `;
  const options = {
    query: query,
    location: 'US',
    params: {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    },
  };

  const [rows] = await bigquery.query(options);
  const deviceData = rows.map(row => ({
    mac: row.mac,
    name: row.name,
    nip: String(row.nip), // Ensure nip is a string
    scanTime: row.scanTime.value.replace('T', ' '),
  }));
  console.log('Fetched deviceData:', deviceData);

  return deviceData;
}

module.exports = fetchMac;