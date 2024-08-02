import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

const FrameComponent: NextPage = () => {
    const router = useRouter();
  const onArrowClick = useCallback(() => {
    router.push("/display-kajur");
  }, [router]);

  const onComponent4ContainerClick = useCallback(() => {
    router.push("/")
  }, [router]);

  return (
    <header className="self-stretch h-[114px] bg-royalblue flex flex-row items-start justify-between py-[22px] pr-[140px] pl-10 box-border top-[0] z-[99] sticky max-w-full gap-[20px] mq750:pr-[70px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="h-[114px] w-[1440px] relative bg-royalblue hidden max-w-full" />
      <div className="self-stretch w-[265px] flex flex-row items-end justify-start gap-[30px]">
        <div className="h-[35px] flex-1 flex flex-col items-start justify-end pt-0 pb-[25px] pr-[9px] pl-0 box-border">
          <img
            className="self-stretch h-[20px] relative max-w-full overflow-hidden shrink-0 object-contain cursor-pointer z-[1]"
            loading="lazy"
            alt=""
            src="/arrow-1.svg"
            onClick={onArrowClick}
          />
        </div>
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
      <div className="w-[60.4px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
        <div
          className="self-stretch h-[50px] relative cursor-pointer z-[1]"
          onClick={onComponent4ContainerClick}
        >
          <img
            className="absolute h-[94%] w-[77.81%] top-[4%] right-[11.92%] bottom-[2%] left-[10.26%] max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
        </div>
    </div>
    </header>
  );
};

export default FrameComponent;