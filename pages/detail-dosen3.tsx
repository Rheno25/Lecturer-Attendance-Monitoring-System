import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const DetailDosen: NextPage = () => {
  const router = useRouter();

  const onArrowClick = useCallback(() => {
    router.push("/display-mahasiswa");
  }, [router]);

  const onImage3IconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-lightblue overflow-hidden flex flex-col items-start justify-start gap-[60px] tracking-[normal] mq750:gap-[30px_60px]">
      <header className="self-stretch h-[114px] bg-royalblue flex flex-row items-start justify-between py-[22px] pr-[140px] pl-10 box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-5xl text-black font-roboto mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pr-[70px] mq750:box-border">
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
        <div className="w-[252.2px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[34.799999999999955px] mq450:gap-[34.8px_17px]">
            <div className="flex-1 flex flex-col items-end justify-start gap-[8px] mq750:hidden">
              <div className="self-stretch relative whitespace-nowrap z-[1]">
                Welcome back
              </div>
              <div className="w-16 relative inline-block min-w-[64px] z-[1]">
                Student
              </div>
            </div>
            <div className="w-[60.4px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
              <div className="self-stretch h-[50px] relative">
                <div className="absolute top-[0px] left-[0px] w-full h-full z-[1]">
                  <img
                    className="absolute h-[94%] w-[77.81%] top-[4%] right-[11.92%] bottom-[2%] left-[10.26%] max-w-full overflow-hidden max-h-full object-contain"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
                <img
                  className="absolute top-[2px] left-[6.2px] w-[47px] h-[47px] object-contain cursor-pointer z-[2]"
                  alt=""
                  src="/image-3@2x.png"
                  onClick={onImage3IconClick}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-[69px] pl-[68px] box-border max-w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
        <section className="flex-1 flex flex-col items-end justify-start gap-[68px] max-w-full text-center text-[56px] text-black font-roboto mq450:gap-[17px_68px] mq750:gap-[34px_68px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[66px] pl-[67px] box-border max-w-full mq1275:pl-[33px] mq1275:pr-[33px] mq1275:box-border">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
              <div className="w-[774px] flex flex-row items-start justify-start gap-[30px] max-w-full mq750:flex-wrap">
                <img
                  className="h-[270px] w-[272px] relative object-cover mq750:flex-1"
                  loading="lazy"
                  alt=""
                  src="/rectangle-4@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[307px] max-w-full">
                  <h1 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-[34px] mq750:text-[45px]">
                    Lecturer Full Name
                  </h1>
                  <h3 className="m-0 w-[231px] relative text-17xl font-normal font-inherit inline-block mq450:text-3xl mq750:text-10xl">
                    Busy
                  </h3>
                </div>
              </div>
              <div className="h-[59px] w-[270px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                <div className="self-stretch flex-1 relative bg-gainsboro" />
              </div>
            </div>
          </div>
          <footer className="self-stretch h-[512px] flex flex-col items-start justify-start py-[30px] px-[67px] box-border relative gap-[165px] text-center text-13xl text-black font-roboto mq450:gap-[82px_165px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="w-full h-full absolute !m-[0] right-[0px] bottom-[-8px] left-[0px] rounded-[10px] [background:linear-gradient(rgba(109,_211,_70,_0.2),_rgba(109,_211,_70,_0.2)),_linear-gradient(rgba(211,_70,_109,_0.2),_rgba(211,_70,_109,_0.2)),_rgba(70,_109,_211,_0.1)] shadow-[10px_4px_4px_rgba(0,_0,_0,_0.25)]" />
            <div className="w-[215px] relative inline-block z-[1] mq450:text-lgi mq750:text-7xl">{`Lecturer Detail: `}</div>
            <div className="w-[110px] relative inline-block min-w-[110px] z-[1] mq450:text-lgi mq750:text-7xl">{`History: `}</div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default DetailDosen;
