import type { NextPage } from "next";

const GroupComponent: NextPage = () => {
  return (
    <div className=" self-stretch flex-1 flex flex-row items-start justify-start py-[18px] px-0 box-border relative min-w-[126px] whitespace-nowrap text-center text-xl text-black font-roboto">
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(rgba(109,_211,_70,_0.2),_rgba(109,_211,_70,_0.2)),_linear-gradient(rgba(211,_70,_109,_0.2),_rgba(211,_70,_109,_0.2)),_rgba(70,_109,_211,_0.1)]" />
      <div className="flex-1 relative z-[1]">Lecturer Room 1</div>
    </div>
  );
};

export default GroupComponent;
