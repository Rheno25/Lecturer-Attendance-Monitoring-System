// pages/reportable.tsx

import { GetServerSideProps } from "next";
import FrameComponent1 from "../components/atoms/frame-component3";
import Report from "../components/atoms/report";
import fetchMac from "../lib/fetchMac";
import MacAddress from "../components/atoms/macaddress";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

interface Device {
    mac: string;
    name: string;
    nip: string;
    scanTime: string;
}

interface HomeProps {
    deviceData: Device[];
}

const handleGeneratePDF = async (deviceData: Device[]) => {
    const pdf = new jsPDF();

    // Define columns and rows
    const columns = [
        { header: 'MAC Address', dataKey: 'mac' },
        { header: 'Name', dataKey: 'name' },
        { header: 'NIP', dataKey: 'nip' },
        { header: 'Scan Time', dataKey: 'scanTime' },
    ];

    // Add rows with data
    autoTable(pdf, {
        head: [columns.map(col => col.header)],
        body: deviceData.map(row => columns.map(col => row[col.dataKey as keyof Device])),
    });

    // Save the PDF
    pdf.save('report.pdf');
};

const reportable: React.FC<HomeProps> = ({ deviceData }) => {
    return (
        <div className="w-full relative bg-lightblue overflow-hidden flex flex-col items-center justify-start gap-[72.5px] tracking-[normal] text-center text-45xl text-black font-roboto mq450:gap-[18px_72.5px] mq750:gap-[36px_72.5px]">
            <FrameComponent1 />
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <h1 className="m-0 h-[66px] w-[796px] relative text-inherit font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-19xl mq1050:text-32xl">
                    Report of Lecturer Presence
                </h1>
            </div>
            <button className="z-[1] bg-red text-white cursor-pointer" onClick={() => handleGeneratePDF(deviceData)}>
                Generate PDF
            </button>
            <div className="flex flex-col items-center justify-center max-w-full">
                <div className="w-[703px] mx-auto flex flex-row items-start justify-start py-0 px-[68px] box-border max-w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
                    <MacAddress data={deviceData} />
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { startDate, endDate } = context.query;

    try {
        // Fetch data from BigQuery based on the selected date range
        const deviceData = await fetchMac(startDate as string, endDate as string);

        return {
            props: {
                deviceData,
            },
        };
    } catch (error) {
        console.error("Error fetching data from BigQuery:", error);
        return {
            props: {
                deviceData: [], // Return empty array or handle error as appropriate
            },
        };
    }
};

export default reportable;