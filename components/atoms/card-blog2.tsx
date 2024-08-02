import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CardBlogType = {
  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onCardBlog2Click?: () => void;
};

const CardBlog: NextPage<CardBlogType> = ({
  propMinWidth,
  onCardBlog2Click,
}) => {
  const statusStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      color: 'red'
    };
  }, [propMinWidth]);

  return (
    <div
      className="h-[436px] w-[270px] rounded-xl overflow-hidden shrink-0 flex flex-col items-start justify-start z-[1] text-center text-xl text-black font-roboto"
      onClick={onCardBlog2Click}
    >
      <img
        className="ml-[-1px] w-[272px] h-[270px] relative object-cover"
        loading="lazy"
        alt=""
        src="/rectangle-4@2x.png"
      />
      <div className="self-stretch bg-white flex flex-col items-start justify-start py-6 px-[23px] gap-[30px] border-[1px] border-solid border-black">
        <div className="w-[272px] h-[168px] relative bg-white box-border hidden border-[1px] border-solid border-black" />
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 relative z-[1] mq450:text-base">
            Lecturer Name
          </div>
          <div className="flex-1 relative z-[2] ml-[-222px] mq450:text-base">
            Lecturer Name
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-0 pr-px pl-0 text-left text-sm">
          <div className="flex flex-col items-center justify-center gap-[24px]">
            <div className="relative leading-[20px] z-[1]" style={statusStyle}>
              Unavailable
            </div>
              <div className="relative leading-[20px] text-red">
                Notes
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
