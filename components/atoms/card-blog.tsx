// components/atoms/card-blog.tsx
import type { NextPage } from "next";
import { getStatusColor } from "../../lib/utils"
import { useMemo, type CSSProperties, useState, useEffect } from "react";
import axios from "axios";

export type CardBlogType = {
  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];

  /** Data props */
  name?: string;
  nip?: string;
  photo?: string;
  status?: string;
  notes?: string;

  /** Action props */
  onCardBlog2Click?: (nip: string) => void;
};

const CardBlog: NextPage<CardBlogType> = ({
  propMinWidth,
  name,
  nip,
  photo,
  status,
  notes,
  onCardBlog2Click,
}) => {
  const [lecturer, setLecturer] = useState<{ name: string;  nip: String; photo: string; status: String; notes: String } | null>(null);

  useEffect(() => {
    const fetchLecturerData = async () => {
      try {
        const response = await axios.get("/api/cardAPI");
        const lecturerData = response.data;
        console.log("API Response:", lecturerData); // Check API response
        setLecturer(lecturerData[0]);
        console.log("Lecturer State:", lecturer); // Check state update
      } catch (error) {
        console.error("Error fetching lecturer data:", error);
      }
    };
    fetchLecturerData();
  }, []);

  console.log("Lecturer State (inside component):", lecturer); // Check state inside component

  const statusStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      color: status ? getStatusColor(status) : 'blue',
    };
  }, [propMinWidth]);

  const handleCardClick = () => {
    if (onCardBlog2Click && nip) {
      onCardBlog2Click(nip); // Pass nip to the onCardBlog2Click function
    }
  };

  return (
    <div
      className="h-auto min-h-[436px] w-[270px] rounded-xl overflow-hidden relative shrink-0 flex flex-col items-start justify-start z-[1] text-center text-xl text-black font-roboto"
      onClick={handleCardClick}
    >
      <img
        className="ml-[-1px] w-[272px] h-[270px] relative object-cover"
        loading="lazy"
        alt=""
        src={photo}
      />
      <div className="self-stretch bg-white flex flex-col items-start justify-start py-6 px-[23px] gap-[30px] border-[1px] border-solid border-black">
        <div className="w-[272px] h-[168px] relative bg-white box-border hidden border-[1px] border-solid border-black" />
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 relative z-[1] mq450:text-base">
            {name}
          </div>
          <div className="flex-1 relative z-[2] ml-[-222px] mq450:text-base">
            {name}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-0 pr-px pl-0 text-left text-sm">
          <div className="flex flex-col items-center justify-center gap-[24px]">
            <div className="relative leading-[20px] z-[1]" style={statusStyle}>
              {status}
            </div>
            <div className="relative leading-[20px] text-red">
              {notes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
