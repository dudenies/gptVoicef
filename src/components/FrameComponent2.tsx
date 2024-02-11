import { FunctionComponent } from "react";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-0.5 pl-0 box-border gap-[20px] max-w-full text-left text-lg text-gray-100 font-button-button">
      <div className="w-[936px] flex flex-col items-start justify-start gap-[10px] max-w-full">
        <b className="relative leading-[25.27px] capitalize">Job Location</b>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[10px] mq900:flex-wrap">
          <div className="flex-1 flex flex-row items-center justify-start min-w-[229px]">
            <div className="flex-1 rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[0.2px] border-solid border-gray-100">
              <input
                className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[171px]"
                placeholder="City"
                type="text"
              />
            </div>
          </div>
          <div className="flex-[0.933] rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[229px] border-[0.2px] border-solid border-gray-100 mq450:flex-1">
            <input
              className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[171px]"
              placeholder="State"
              type="text"
            />
          </div>
          <div className="flex-[0.933] rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[229px] border-[0.2px] border-solid border-gray-100 mq450:flex-1">
            <input
              className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[171px]"
              placeholder="Zip Code"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="w-[274px] flex flex-col items-start justify-start gap-[10px] min-w-[178px]">
        <b className="relative leading-[25.27px] capitalize">Seniority level</b>
        <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">
          <div className="flex-1 relative leading-[25.27px]">Mid Level</div>
          <img className="h-3 w-[22px] relative" alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className="w-[274px] flex flex-row items-center justify-start gap-[30px] min-w-[178px] min-h-[46px] text-base text-gray-200">
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <div className="flex flex-row items-start justify-start w-[23px] h-[23px]">
            <img
              className="h-[23px] w-[23px] relative"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="relative leading-[25.27px] capitalize font-medium">
            Remote
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <div className="flex flex-row items-start justify-start w-[23px] h-[23px]">
            <img
              className="h-[23px] w-[23px] relative"
              alt=""
              src="/vector-3.svg"
            />
          </div>
          <div className="relative leading-[25.27px] capitalize font-medium">{`Hybrid `}</div>
        </div>
      </div>
      <div className="w-[274px] flex flex-col items-start justify-start gap-[10px] min-w-[178px]">
        <b className="relative leading-[25.27px] capitalize">LLM</b>
        <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] text-sm border-[0.2px] border-solid border-gray-100">
          <div className="flex-1 relative leading-[25.27px]">Synthflow</div>
          <img className="h-3 w-[22px] relative" alt="" src="/vector-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
