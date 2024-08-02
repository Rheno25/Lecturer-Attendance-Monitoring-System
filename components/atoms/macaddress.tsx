import React from 'react';

interface Device {
    mac: string;
    name: string;
    nip: string;
    scanTime: string;
}

interface DeviceTableProps {
    data: Device[];
}

const MacAddress: React.FC<DeviceTableProps> = ({ data }) => {
    return (
        <table id="mac-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>MAC Address</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Lecturer Name</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>NIP</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Scan Time</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.mac}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.nip}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.scanTime}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MacAddress;