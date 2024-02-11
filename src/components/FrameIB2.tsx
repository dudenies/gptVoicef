import { FunctionComponent } from "react";

const FrameIB2: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-white box-border flex flex-col items-start justify-start py-2.5 pr-[51px] pl-[49px] max-w-full text-left text-lg text-gray-100 font-button-button border-[0.5px] border-solid border-gainsboro-100 mq1275:pl-6 mq1275:pr-[25px] mq1275:box-border">
      <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[20px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[330px] max-w-full">
          <b className="relative leading-[25.27px] capitalize">{`recruiter name `}</b>
          <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
            <input
              className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] capitalize text-gray-100 text-left inline-block min-w-[250px] max-w-full"
              placeholder="recruiter name "
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[330px] max-w-full">
          <b className="relative leading-[25.27px] capitalize">{`recruiter Phone Number `}</b>
          <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
            <input
              className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] capitalize text-gray-100 text-left inline-block min-w-[250px] max-w-full"
              placeholder="recruiter Phone Number "
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[330px] max-w-full">
          <b className="relative leading-[25.27px] capitalize">
            recruiter Email
          </b>
          <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
            <input
              className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] capitalize text-gray-100 text-left inline-block min-w-[250px] max-w-full"
              placeholder="recruiter Email"
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[330px] max-w-full">
          <b className="relative leading-[25.27px] capitalize">link</b>
          <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
            <input
              className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] capitalize text-gray-100 text-left inline-block min-w-[250px] max-w-full"
              placeholder="Link"
              type="text"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameIB2;
