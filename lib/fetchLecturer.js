import { getStatusColor } from './utils';

const { BigQuery } = require('@google-cloud/bigquery');

async function fetchLecturer() {
  const bigquery = new BigQuery(); // Initialize the BigQuery client

  const lecturerQuery = `SELECT nip, name, photo, mac, notes FROM lecturer-attending.scannmap.lecturers`;
  const scannedDevicesQuery = `SELECT macAddress FROM lecturer-attending.scannmap.scanned_latest`;

  try {
    // Fetch lecturers
    const [lecturers] = await bigquery.query({ query: lecturerQuery, location: 'US' });
    console.log('Lecturers:', lecturers); // Log lecturers data

    // Fetch scanned devices
    const [scannedDevices] = await bigquery.query({ query: scannedDevicesQuery, location: 'US' });
    console.log('Scanned Devices:', scannedDevices); // Log scanned devices data

    // Create a set of scanned MAC addresses for quick lookup
    const scannedMacAddresses = new Set(scannedDevices.map(device => device.macAddress));
    console.log('Scanned MAC Addresses Set:', scannedMacAddresses); // Log the set of MAC addresses

    // Add status to each lecturer based on presence in scanned devices
    const lecturersWithStatus = lecturers.map(lecturer => {
      const status = scannedMacAddresses.has(lecturer.mac) ? 'Available' : 'Not Available';
      return {
        ...lecturer, 
        status, 
        color:getStatusColor(status), 
      }
    });

    console.log('Lecturers with Status:', lecturersWithStatus); // Log lecturers with status
    return lecturersWithStatus;
  } catch (error) {
    console.error('Error fetching lecturer data:', error);
    throw error;
  }
}

module.exports = fetchLecturer;