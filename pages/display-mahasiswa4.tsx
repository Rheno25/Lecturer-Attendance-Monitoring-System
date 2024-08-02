import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent1 from "../components/atoms/frame-component1";
import GroupComponent3 from "../components/atoms/group-component3";
import CardBlog from "../components/atoms/card-blog";
import CardBlog2 from "../components/atoms/card-blog2";
import CardBlog3 from "../components/atoms/card-blog3";

const DisplayMahasiswa: NextPage = () => {
  const router = useRouter();

  const onImage1IconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onCardBlog2Click = useCallback(() => {
    router.push("/detail-dosen");
  }, [router]);

  const onCardBlog3Click = useCallback(() => {
    router.push("/detail-dosen");
  }, [router]);

  const onCardBlog4Click = useCallback(() => {
    router.push("/detail-dosen");
  }, [router]);

  const onCardBlog5Click = useCallback(() => {
    router.push("/detail-dosen2");
  }, [router]);

  const onComponent6ContainerClick = useCallback(() => {
    router.push("display-mahasiswa");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("display-mahasiswa3");
  }, [router]);

  return (
    <div className="w-full relative bg-lightblue overflow-hidden flex flex-col items-start justify-start gap-[72.5px] tracking-[normal] text-center text-45xl text-black font-roboto mq450:gap-[18px_72.5px] mq750:gap-[36px_72.5px]">
      <FrameComponent1 onImage2IconClick={onImage1IconClick} />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 h-[66px] w-[796px] relative text-inherit font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-19xl mq1050:text-32xl">
          Lecturer Monitoring System
        </h1>
      </div>
      <section className="flex flex-row items-start justify-start py-0 pr-[69px] pl-[68px] box-border max-w-full text-center text-xl text-black font-roboto mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
        <div className="flex flex-col items-start justify-start max-w-full">
          <div className="w-[703px] flex flex-row items-start justify-start py-0 px-[68px] box-border max-w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[31.5px] max-w-full mq750:gap-[16px]">
              <div
                className=" self-stretch flex-1 [background:linear-gradient(rgba(70,_109,_211,_0.1),_rgba(70,_109,_211,_0.1)),_linear-gradient(rgba(211,_70,_109,_0),_rgba(211,_70,_109,_0)),_rgba(109,_211,_70,_0.34)] flex flex-row items-start justify-start py-[18px] pr-0 pl-[2.900000000000091px] box-border relative min-w-[126px] whitespace-nowrap cursor-pointer"
                onClick={onComponent6ContainerClick}
              >
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px]" />
                <div className="flex-1 relative z-[1]">Lecturer Room 1</div>
              </div>
              <div
                className=" self-stretch flex-1 [background:linear-gradient(rgba(70,_109,_211,_0.1),_rgba(70,_109,_211,_0.1)),_linear-gradient(rgba(211,_70,_109,_0),_rgba(211,_70,_109,_0)),_rgba(109,_211,_70,_0.34)] flex flex-row items-start justify-start py-[18px] pr-0 pl-[2.900000000000091px] box-border relative min-w-[126px] whitespace-nowrap cursor-pointer"
                onClick={onRectangleClick}
              >
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px]" />
                <div className="flex-1 relative z-[1]">Lecturer Room 3</div>
              </div>
              <GroupComponent3 />
            </div>
          </div>
          <div className="w-[1303px] h-[638px] [background:linear-gradient(rgba(109,_211,_70,_0.2),_rgba(109,_211,_70,_0.2)),_linear-gradient(rgba(211,_70,_109,_0.2),_rgba(211,_70,_109,_0.2)),_rgba(70,_109,_211,_0.1)] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-[65px] pr-[65px] pl-[68px] box-border gap-[30px] max-w-full lg:pl-[34px] lg:pr-8 lg:box-border mq750:gap-[30px_15px] mq750:pt-[42px] mq750:pb-[42px] mq750:box-border">
            <div className="h-[638px] w-[1303px] relative [background:linear-gradient(rgba(109,_211,_70,_0.2),_rgba(109,_211,_70,_0.2)),_linear-gradient(rgba(211,_70,_109,_0.2),_rgba(211,_70,_109,_0.2)),_rgba(70,_109,_211,_0.1)] shrink-0 hidden max-w-full" />
            <CardBlog propMinWidth="41px" onCardBlog2Click={onCardBlog2Click} />
            <CardBlog propMinWidth="41px" onCardBlog2Click={onCardBlog3Click} />
            <CardBlog propMinWidth="41px" onCardBlog2Click={onCardBlog4Click} />
            <CardBlog2 propMinWidth="41px" onCardBlog2Click={onCardBlog5Click} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayMahasiswa;
