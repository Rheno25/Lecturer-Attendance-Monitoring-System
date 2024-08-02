//components/molecules/date-picker.tsx

import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import DateInput from "../atoms/date-input";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";

const DatePicker: NextPage = () => {
  const router = useRouter();
  const [selectedDate1, setSelectedDate1] = useState('');
  const [selectedDate2, setSelectedDate2] = useState('');

    const handleDateChange1 = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedDate1(event.target.value);
      };

      const handleDateChange2 = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedDate2(event.target.value);
      };

      const handleSubmit = () => {
        if (selectedDate1 && selectedDate2) {
          router.push({
            pathname: "/reportable",
            query: {
              startDate: selectedDate1,
              endDate: selectedDate2,
            },
          });
        } else {
          alert("Please select both start and end dates.")
        }
      };

      return (
        <div className="flex-1 rounded-3xs [background:linear-gradient(rgba(109,_211,_70,_0.2),_rgba(109,_211,_70,_0.2)),_linear-gradient(rgba(211,_70,_109,_0.2),_rgba(211,_70,_109,_0.2)),_rgba(70,_109,_211,_0.1)] shadow-[10px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[66px] pb-[202px] pr-[66px] pl-[67px] box-border gap-[179px] max-w-full text-center text-xl text-black font-roboto lg:gap-[89px_179px] lg:pl-[33px] lg:pr-[33px] lg:box-border mq750:gap-[45px_179px] mq750:pt-[43px] mq750:pb-[131px] mq750:box-border mq450:gap-[22px_179px]">
          <div className="w-[1303px] h-[638px] relative rounded-3xs [background:linear-gradient(rgba(109,_211,_70,_0.2),_rgba(109,_211,_70,_0.2)),_linear-gradient(rgba(211,_70,_109,_0.2),_rgba(211,_70,_109,_0.2)),_rgba(70,_109,_211,_0.1)] shadow-[10px_4px_4px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px_35px]">
            <div className="w-[168px] relative inline-block z-[1] mq450:text-base">
              Select time range
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[30px] max-w-full text-17xl lg:flex-wrap">
              <div className="flex-1 bg-whitesmoke box-border flex flex-row items-start justify-center pt-5 pb-[5px] pr-5 pl-[21px] min-w-[348px] max-w-full z-[1] border-[1px] border-solid border-black lg:flex-1 mq750:min-w-full">
                <div className="h-[81px] w-[535px] relative bg-whitesmoke box-border hidden max-w-full border-[1px] border-solid border-black" />
                <div className="w-[202px] relative inline-block z-[2] mq450:text-3xl mq1050:text-10xl">
                  <DateInput value={selectedDate1} onChange={handleDateChange1} />
                </div>
              </div>
              <div className="w-10 flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border text-xl">
                <div className="self-stretch relative z-[1] mq450:text-base">-</div>
              </div>
              <div className="flex-1 bg-whitesmoke box-border flex flex-row items-start justify-center pt-5 pb-[5px] pr-5 pl-[21px] min-w-[348px] max-w-full z-[1] border-[1px] border-solid border-black lg:flex-1 mq750:min-w-full">
                <div className="h-[81px] w-[535px] relative bg-whitesmoke box-border hidden max-w-full border-[1px] border-solid border-black" />
                <div className="w-[202px] relative inline-block z-[2] mq450:text-3xl mq1050:text-10xl">
                  <DateInput value={selectedDate2} onChange={handleDateChange2} />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center">
            <Button className="z-[1]" variant="success" onClick={handleSubmit}>
              GENERATE
            </Button>
          </div>
        </div>
      );
    };
    
    export default DatePicker;
