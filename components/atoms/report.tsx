import React from 'react';

interface Device {
    nip: string;
    name: string;
    timestamp: string;
}

interface DeviceTableProps {
    data: Device[];
}

const Report: React.FC<DeviceTableProps> = ({ data }) => {
    return (
      <table id="report-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
            <tr>
            <th style={{ border: '2px solid #000000', padding: '8px', fontSize: '16px' }}>Timestamp</th>
            <th style={{ border: '2px solid #000000', padding: '8px', fontSize: '16px' }}>Lecturer ID</th>
            <th style={{ border: '2px solid #000000', padding: '8px', fontSize: '16px' }}>Lecturer Name</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
            <tr key={index}>
                <td style={{ border: '2px solid #000000', padding: '8px', fontSize: '16px' }}>{item.timestamp}</td>
                <td style={{ border: '2px solid #000000', padding: '8px', fontSize: '16px' }}>{item.nip}</td>
                <td style={{ border: '2px solid #000000', padding: '8px', fontSize: '16px' }}>{item.name}</td>
            </tr>
            ))}
        </tbody>
    </table>
    );
}

export default Report;