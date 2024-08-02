import MacAddress from "../components/atoms/macaddress";
import FrameComponent1 from "../components/atoms/frame-component3";
import { useCallback } from "react";
import router from "next/router";
import { loadCsv } from "../lib/loadcsv";
import { GetServerSideProps } from "next";
import fetchMac from '../lib/fetchMac'; 

interface Device {
    mac: string;
    name: string;
    nip: string;
    scanTime: string;
}

interface HomeProps {
    deviceData: Device[];
}

const mactable: React.FC<HomeProps> = ({deviceData}) => {
    const onImage1IconClick = useCallback(() => {
        router.push("/");
      }, [router]);
      
    return (
        <div className="w-full relative bg-lightblue overflow-hidden flex flex-col items-center justify-start gap-[72.5px] tracking-[normal] text-center text-45xl text-black font-roboto mq450:gap-[18px_72.5px] mq750:gap-[36px_72.5px]">
        <FrameComponent1 />
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <h1 className="m-0 h-[66px] w-[796px] relative text-inherit font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-19xl mq1050:text-32xl">
                Table of MAC Addresses
                </h1>
            </div>
            <div className="flex flex-col items-center justify-center max-w-full">
                <div className="w-[703px] mx-auto flex flex-row items-start justify-start py-0 px-[68px] box-border max-w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
                <MacAddress data={deviceData} />
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        // Fetch data from BigQuery instead of loading from CSV
        const deviceData = await fetchMac(); // Adjust this function call based on your fetch function for BigQuery

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

export default mactable;