//components/organisms/report.tsx

import type { NextPage } from "next";
import FrameComponent from "../atoms/frame-component3";
import DatePicker from "../molecules/date-picker";

const Report: NextPage = () => {
  return (
    <div className="w-full relative bg-lightblue overflow-hidden flex flex-col items-start justify-start gap-[98.5px] tracking-[normal] text-center text-[64px] text-black font-roboto mq750:gap-[49px_98.5px] mq450:gap-[25px_98.5px]">
      <FrameComponent />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
        <h1 className="m-0 w-[565px] relative text-inherit font-normal font-inherit inline-block mq450:text-[38px] mq1050:text-[51px]">
          GENERATE REPORT
        </h1>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[69px] pl-[68px] box-border max-w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
        <DatePicker />
      </section>
    </div>
  );
};

export default Report;