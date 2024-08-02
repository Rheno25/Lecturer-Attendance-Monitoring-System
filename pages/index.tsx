//pages/index.tsx

import type { NextPage } from "next";
import InputField from "../components/templates/input-field";

const LoginLecturer: NextPage = () => {
  return (
    <div className="w-full relative bg-lightblue overflow-hidden flex flex-col items-start justify-start pt-[120px] px-6 pb-[183px] box-border gap-[80px] tracking-[normal] mq450:gap-[20px_80px] mq750:gap-[40px_80px]">
      <section className="self-stretch flex flex-col items-start justify-start gap-[30px] text-center text-[48px] text-black font-archivo-black">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit mq450:text-10xl mq450:leading-[43px] mq750:text-19xl mq750:leading-[58px]">
          Login
        </h1>
        <h1 className="m-0 self-stretch h-[100px] relative text-17xl tracking-[-0.01em] leading-[50px] font-normal font-body-h4 text-gray-100 inline-block shrink-0 mq450:text-3xl mq450:leading-[30px] mq750:text-10xl mq750:leading-[40px]">
          Please enter username and password
        </h1>
      </section>
      <InputField />
    </div>
  );
};

export default LoginLecturer;
