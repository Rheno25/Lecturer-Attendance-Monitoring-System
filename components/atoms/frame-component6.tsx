// components/atoms/frame-component5.tsx

import type { NextPage } from "next";
import Component1 from "./component3";
import Component from "./component2";
import styles from "./frame-component.module.css";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

export type FrameComponentType = {
  className?: string;
  username: string; // Add username to the FrameComponentType
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  username, // Destructure username from props
}) => {
  const [notes, setNotes] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [lecturer, setLecturer] = useState<{
    name: string;
    photo: string;
    status: string;
    notes: string;
  } | null>(null);

  useEffect(() => {
    const fetchLecturerData = async () => {
      try {
        if (!username) {
          throw new Error('Username is missing');
        }
        const response = await axios.get(`/api/lecturerProfileAPI?username=${encodeURIComponent(username)}`);
        const lecturerData = response.data;
        console.log("API Response:", lecturerData); // Check API response
        setLecturer(lecturerData[0]); // Assuming the API returns an array
        console.log("Lecturer State:", lecturer); // Check state update
      } catch (error) {
        console.error("Error fetching lecturer data:", error);
      }
    };    
    fetchLecturerData();
  }, [username]); // Add username to the dependency array

  console.log("Lecturer State (inside component):", lecturer); // Check state inside component

  const addNote = (note: string) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (note: string) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n !== note));
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Available":
        return styles.available;
      case "Unavailable":
        return styles.unavailable;
      case "Busy":
        return styles.busy;
      default:
        return "";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "Available":
        return "Available";
      case "Unavailable":
        return "Unavailable";
      case "Busy":
        return "Busy";
      default:
        return "Unknown Status";
    }
  };

  return (
    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[66px] pl-[67px] box-border max-w-full mq1275:pl-[33px] mq1275:pr-[33px] mq1275:box-border">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
        <img
          className="h-[270px] w-[272px] relative object-cover mq750:flex-1"
          loading="lazy"
          alt=""
          src={lecturer?.photo}
        />
        <div className={styles.frameParent}>
          <div className="flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[307px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-[34px] mq750:text-[45px]">
              {lecturer?.name}
            </h1>
            <h3
              className={`m-0 w-[300px] text-17xl items-start justify-start font-normal font-inherit inline-block mq450:text-3xl mq750:text-10xl ${getStatusClass(
                selectedOption
              )}`}
            >
              {lecturer?.status}
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[307px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-[34px] mq750:text-[45px]">
              {lecturer?.notes}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;