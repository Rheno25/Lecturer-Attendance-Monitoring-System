import type { NextPage } from "next";
import { CSSProperties, useMemo } from "react";

export type FrameComponent1Type = {
  /** Action props */
  onImage2IconClick?: () => void;
};

const statusStyle: CSSProperties = {
    display: 'inline-block',
    minWidth: '85px', 
    padding: '0 8px', 
    boxSizing: 'content-box'
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  onImage2IconClick,
}) => {
  return (
    <header className="self-stretch h-[114px] bg-royalblue flex flex-row items-start justify-between py-[22px] pr-[147px] pl-[135px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-5xl text-black font-roboto mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[67px] mq750:pr-[73px] mq750:box-border">
      <div className="h-[114px] w-[1440px] relative bg-royalblue hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-start gap-[30px]">
        <img
          className="h-[70px] w-[70px] relative object-cover min-h-[70px] z-[1]"
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
        />
        <img
          className="h-[70px] w-[70px] relative object-cover min-h-[70px] z-[1]"
          loading="lazy"
          alt=""
          src="/jti-1@2x.png"
        />
      </div>
      <div className="w-[244px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-end justify-start gap-[40px]">
          <div className="flex-1 flex flex-col items-end justify-start gap-[8px] mq450:hidden">
            <div className="self-stretch relative whitespace-nowrap z-[1]">
              Welcome back
            </div>
            <div className="w-[min-content] relative inline-block min-w-[85px] z-[1]" style={{ whiteSpace: 'nowrap'}}>
              Student
            </div>
          </div>
          <div className="h-[55px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border">
            <img
              className="w-[47px] h-[47px] relative object-cover cursor-pointer z-[1]"
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
              onClick={onImage2IconClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
