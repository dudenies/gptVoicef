import { FunctionComponent } from "react";

const FrameIB: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-white box-border flex flex-col items-start justify-start py-2.5 pr-[51px] pl-[49px] max-w-full border-[0.5px] border-solid border-gainsboro-100 mq1275:pl-6 mq1275:pr-[25px] mq1275:box-border">
      <footer className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-px pl-0 box-border gap-[20px] max-w-full text-left text-lg text-gray-100 font-button-button">
        <div className="flex-1 flex flex-row items-end justify-start py-0 pr-px pl-0 box-border gap-[20px] min-w-[990px] max-w-full mq1275:min-w-full mq1600:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[211px] max-w-full">
            <b className="relative leading-[25.27px] capitalize">Name</b>
            <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[0.2px] border-solid border-gray-100">
              <input
                className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[182px]"
                placeholder="Name"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[211px] max-w-full">
            <b className="relative leading-[25.27px] capitalize">
              Phone Number
            </b>
            <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[0.2px] border-solid border-gray-100">
              <input
                className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[182px]"
                placeholder="Phone Number"
                type="text"
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[14.008905410766602px] px-[21px] bg-deepskyblue-100 h-[51px] rounded-6xs flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-deepskyblue-200">
            <b className="relative text-base tracking-[1.75px] leading-[22.41px] uppercase font-button-button text-white text-left">
              {" "}
              test call
            </b>
          </button>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[211px] max-w-full">
            <b className="relative leading-[25.27px] capitalize">{`Recruiter Name `}</b>
            <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] text-sm border-[0.2px] border-solid border-gray-100">
              <div className="flex-1 relative leading-[25.27px]">Name</div>
              <img
                className="h-[6.6px] w-[12.1px] relative"
                alt=""
                src="/vector-8.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[211px] max-w-full">
            <b className="relative leading-[25.27px] capitalize">Client name</b>
            <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] text-sm border-[0.2px] border-solid border-gray-100">
              <div className="flex-1 relative leading-[25.27px]">Name</div>
              <img
                className="h-[6.6px] w-[12.1px] relative"
                alt=""
                src="/vector-8.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end justify-start gap-[10px]">
          <button className="cursor-pointer [border:none] py-[14.008905410766602px] px-[21px] bg-gray-100 h-[51px] rounded-6xs flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-darkslategray-100">
            <b className="relative text-base tracking-[1.75px] leading-[22.41px] font-button-button text-white text-left">
              Run Later
            </b>
          </button>
          <button className="cursor-pointer [border:none] py-[14.008905410766602px] px-[22px] bg-forestgreen-200 h-[51px] rounded-6xs flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-limegreen">
            <b className="relative text-base tracking-[1.75px] leading-[22.41px] font-button-button text-white text-left">
              Run Now
            </b>
          </button>
        </div>
      </footer>
    </section>
  );
};

export default FrameIB;
