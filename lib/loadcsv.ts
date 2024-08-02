import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

interface Device {
  timestamp: string;
  scannerId: string;
  scanTime: string;
  macAddress: string;
}

export const loadCsv = async (): Promise<Device[]> => {
  const filePath = path.resolve(process.cwd(), '..', 'MAC.csv');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  return new Promise((resolve, reject) => {
    parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      relax_column_count: true,
    }, (err, records: Device[]) => {
      if (err) {
        return reject(err);
      }
      resolve(records);
    });
  });
};
